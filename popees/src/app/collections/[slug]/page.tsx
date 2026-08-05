import fs from 'fs';
import path from 'path';
import ProductGrid from '@/components/ProductGrid';

interface Props {
  params: { slug: string };
}

export default function CollectionPage({ params }: Props) {
  const { slug } = params;
  const dataPath = path.join(process.cwd(), 'src', 'data', 'collections', `${slug}.json`);
  let products = [] as any[];
  if (fs.existsSync(dataPath)) {
    try {
      const raw = fs.readFileSync(dataPath, 'utf8');
      products = JSON.parse(raw);
    } catch (err) {
      console.error('Failed to read collection JSON', err);
    }
  }

  const gridProducts = products.map((p, i) => ({
    id: String(i),
    name: p.title || '',
    shortName: p.title || '',
    price: p.price || '',
    href: p.url || '#',
    img: p.localImage || p.image || '/assets/images/placeholder.png',
  }));

  return (
    <ProductGrid title={slug.replace(/-/g, ' ')} viewAllHref={`/collections/${slug}`} products={gridProducts} />
  );
}
