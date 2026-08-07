const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const collections = [
  'https://www.popees.com/collections/baby-jhabla-new?page=2',
  'https://www.popees.com/collections/baby-jhabla-new',
  'https://www.popees.com/collections/baby-top-new',
  'https://www.popees.com/collections/baby-shirt-new',
  'https://www.popees.com/collections/baby-dresses-1',
  'https://www.popees.com/collections/baby-shorts-new',
  'https://www.popees.com/collections/baby-pants-new',
  'https://www.popees.com/collections/baby-co-ord-sets-new',
  'https://www.popees.com/collections/baby-sleepsuit-new',
  'https://www.popees.com/collections/girls-t-shirt-new',
  'https://www.popees.com/collections/girls-dresses-new'
];

async function fetchHtml(url) {
  const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  return res.data;
}

function slugFromUrl(url) {
  return url.replace(/https?:\/\//, '').split('/').pop().replace(/\?.*$/, '');
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function downloadImage(url, dest) {
  try {
    const res = await axios.get(url, { responseType: 'stream', headers: { 'User-Agent': 'Mozilla/5.0' } });
    await new Promise((resolve, reject) => {
      const stream = res.data.pipe(fs.createWriteStream(dest));
      stream.on('finish', resolve);
      stream.on('error', reject);
    });
    return true;
  } catch (err) {
    console.warn('Image download failed', url, err.message);
    return false;
  }
}

async function parseCollection(url) {
  console.log('Fetching', url);
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  const products = {};

  $('a[href*="/products/"]').each((_, el) => {
    const a = $(el);
    let href = a.attr('href');
    if (!href) return;
    if (href.startsWith('/')) href = 'https://www.popees.com' + href;
    const title = (a.attr('aria-label') || a.text() || a.find('img').attr('alt') || '').trim();
    let img = a.find('img').attr('data-src') || a.find('img').attr('src') || null;
    if (img && img.startsWith('//')) img = 'https:' + img;
    const parent = a.closest('div');
    let price = null;
    const priceEl = parent.find('.price, .product-card__price, .price--listing').first();
    if (priceEl && priceEl.text()) price = priceEl.text().trim();

    if (!products[href]) {
      products[href] = { title: title || null, url: href, image: img, price };
    }
  });

  // Fallback: also look for product cards with data-product
  $('[data-product]').each((_, el) => {
    const card = $(el);
    const link = card.find('a[href*="/products/"]').first();
    if (!link) return;
    let href = link.attr('href');
    if (href.startsWith('/')) href = 'https://www.popees.com' + href;
    if (products[href]) return;
    const title = link.attr('aria-label') || link.text() || card.find('img').attr('alt');
    let img = card.find('img').attr('data-src') || card.find('img').attr('src') || null;
    if (img && img.startsWith('//')) img = 'https:' + img;
    const priceEl = card.find('.price, .product-card__price, .price--listing').first();
    const price = priceEl && priceEl.text() ? priceEl.text().trim() : null;
    products[href] = { title: title || null, url: href, image: img, price };
  });

  return Object.values(products);
}

async function run() {
  ensureDir(path.join(__dirname, '..', 'src', 'data', 'collections'));
  const index = {};
  for (const url of collections) {
    try {
      const slug = slugFromUrl(url) || 'collection';
      const items = await parseCollection(url);
      console.log(`Found ${items.length} items for ${slug}`);

      const outDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'collections', slug);
      ensureDir(outDir);

      for (const item of items) {
        if (item.image) {
          const ext = path.extname(new URL(item.image, 'https://example.com').pathname).split('?')[0] || '.jpg';
          const safeName = item.url.replace(/https?:\/\//, '').replace(/[^a-z0-9.-]/gi, '_').slice(0, 80) + ext;
          const dest = path.join(outDir, safeName);
          if (!fs.existsSync(dest)) {
            const ok = await downloadImage(item.image, dest);
            if (ok) {
              item.localImage = `/assets/images/collections/${slug}/${safeName}`;
            } else {
              item.localImage = item.image;
            }
          } else {
            item.localImage = `/assets/images/collections/${slug}/${safeName}`;
          }
        }
      }

      const outPath = path.join(__dirname, '..', 'src', 'data', 'collections', `${slug}.json`);
      fs.writeFileSync(outPath, JSON.stringify(items, null, 2), 'utf8');
      console.log('Wrote', outPath);
      // pick representative image for this collection
      const rep = items.find((it) => it.localImage || it.image);
      index[slug] = rep ? (rep.localImage || rep.image) : null;
    } catch (err) {
      console.error('Error processing', url, err.message);
    }
  }

  // write public index so the frontend can fetch thumbnails
  try {
    const publicIndexPath = path.join(__dirname, '..', 'public', 'assets', 'images', 'collections', 'index.json');
    ensureDir(path.dirname(publicIndexPath));
    fs.writeFileSync(publicIndexPath, JSON.stringify(index, null, 2), 'utf8');
    console.log('Wrote index', publicIndexPath);
  } catch (err) {
    console.error('Failed to write public index', err.message);
  }
}

run().catch(err => { console.error(err); process.exit(1); });
