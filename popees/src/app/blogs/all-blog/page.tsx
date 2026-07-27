import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  img: string;
  href: string;
}

const blogPosts: BlogPost[] = [
{
  id: '1',
  title: 'How to Choose the Best Baby Clothes for Every Season (2026 Parent\'s Guide)',
  excerpt: 'How to Choose the Best Baby Clothes for Every Season Your baby\'s comfort begins with the clothes they wear. From warm summer afternoons to chilly winter mornings, choosing the right...',
  date: 'July 14, 2026',
  img: 'https://www.popees.com/cdn/shop/articles/pexels-photo-3875225.jpg?v=1752484800&width=1100',
  href: 'https://www.popees.com/blogs/news/how-to-choose-the-best-baby-clothes-for-every-season-2026-parents-guide'
},
{
  id: '2',
  title: 'Complete Newborn Baby Essentials Checklist for First-Time Parents (2026 Ultimate Guide)',
  excerpt: 'Complete Newborn Baby Essentials Checklist for First-Time Parents Preparing for your baby\'s arrival is one of the most exciting milestones in parenthood. Along with the joy and anticipation comes a...',
  date: 'July 14, 2026',
  img: 'https://www.popees.com/cdn/shop/articles/pexels-photo-3875225_1.jpg?v=1752484800&width=1100',
  href: 'https://www.popees.com/blogs/news/complete-newborn-baby-essentials-checklist-for-first-time-parents-2026-ultimate-guide'
},
{
  id: '3',
  title: 'Guide on How to Use Baby Wipes for Newborns?',
  excerpt: 'Baby wipes are one of the best innovations in baby care. These soft, wet cloths are made from gentle, skin-friendly materials, specifically designed to clean and refresh your little one....',
  date: 'November 22, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/baby-wipes-guide.jpg?v=1748000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/how-to-use-baby-wipes-for-newborns'
},
{
  id: '4',
  title: 'Maternity Wear: The Ultimate Buying Guide',
  excerpt: 'Pregnancy is a phase when women crave comfort and care more than ever. Things we once enjoyed may suddenly irritate us, and simple routines become challenging. With frequent urination, vomiting,...',
  date: 'November 14, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/maternity-guide.jpg?v=1747000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/guide-for-clothes-during-pregnancy'
},
{
  id: '5',
  title: 'How to Wash Baby Clothes Safely: Introducing Popees Baby Fabric Wash',
  excerpt: 'Bringing your newborn home is one of the most magical moments of parenthood. You\'ve set up the nursery, stocked up on diapers, and lovingly chosen the softest baby outfits. But...',
  date: 'November 8, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/wash-baby-clothes.jpg?v=1746000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/how-to-wash-baby-clothes'
},
{
  id: '6',
  title: 'Diaper Rashes and How to Avoid Them with Skin-Friendly Shorts Diapers',
  excerpt: 'Diapers are a blessing for parents, making life with babies much more convenient. But sometimes, what is meant to protect can become a source of discomfort. For some babies, factors...',
  date: 'October 28, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/diaper-rash.jpg?v=1745000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/diaper-rashes-and-prevention'
},
{
  id: '7',
  title: 'OUR BABY ESSENTIALS',
  excerpt: "Popees is not just about clothes, it's about giving your baby comfort and care in everything we make • Popees Ultra-gentle Floating Soap: Mild, Free from harsh chemicals such as...",
  date: 'October 17, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/baby-essentials-blog.jpg?v=1744000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/our-baby-essentials'
},
{
  id: '8',
  title: 'FABRIC QUALITY MEASURES',
  excerpt: "At Popees, quality isn't a step, it's a culture. There are 28 checkpoints every product goes through before it reaches your baby's hands: Defect Rate: Measures the number of defects...",
  date: 'October 17, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/fabric-quality.jpg?v=1744000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/fabric-quality-measures'
},
{
  id: '9',
  title: 'ORGANIC BABY CARE',
  excerpt: "At Popees, we know how precious your baby's skin is. That's why we make our organic clothes using bamboo-cotton, a natural fabric that's extra soft, safe, and gentle. It keeps...",
  date: 'October 17, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/organic-baby-care.jpg?v=1744000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/organic-baby-care'
},
{
  id: '10',
  title: 'Christian Baby Girl Names And Their Meanings',
  excerpt: 'Naming a child is one of the most joyful and heartwarming experiences for parents. It is not just about choosing a name, but about giving your little one an identity...',
  date: 'October 8, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/christian-names.jpg?v=1743000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/christian-baby-girl-names-and-their-meanings'
},
{
  id: '11',
  title: '100+ Modern ,Unique Hindu Girl Names With Meanings for 2025',
  excerpt: 'Still searching for unique Hindu baby girls names, while raving to find that perfect, all-right name for your little princess? You\'re in the right place! Choosing the perfect name for...',
  date: 'September 29, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/hindu-names.jpg?v=1742000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/unique-hindu-girl-names-with-meanings'
},
{
  id: '12',
  title: 'Best Muslim Girl Names for 2025 – 100+ Beautiful Muslim Girl Names with Meanings',
  excerpt: "What's in a name? Well, we just say, everything is in a name. A name is more than just an identity; it carries faith, culture, and meaning that lasts a...",
  date: 'September 29, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/muslim-names.jpg?v=1742000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/best-muslim-girl-names-with-meanings'
},
{
  id: '13',
  title: 'Seasonal Newborn Baby Dress & Outfit Guide: Dressing Your Baby for Every Season',
  excerpt: 'Your little bundle of joy has finally arrived after those long months of waiting, the anxious mornings, restless nights, and countless prayers. Now it\'s time to put all those carefully...',
  date: 'September 3, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/seasonal-baby-dress.jpg?v=1741000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/seasonal-newborn-baby-dress-outfit'
},
{
  id: '14',
  title: 'Bamboo Fabric Clothing: The Future of Sustainable Fashion',
  excerpt: 'When selecting clothes for babies, comfort and breathability are crucial, but sustainability is now equally important. Cotton has long been a popular option, but now more parents are opting for...',
  date: 'August 20, 2025',
  img: 'https://www.popees.com/cdn/shop/files/Bamboo_90517547-f1dc-4337-8d36-651a58b527be.jpg?v=1782889207&width=600',
  href: 'https://www.popees.com/blogs/all-blog/bamboo-fabric-clothing'
},
{
  id: '15',
  title: 'The Importance of Sleep in Newborn Babies: Tips for a Restful Sleep',
  excerpt: "Hey there, new parent! Been typing things like \"how to make baby sleep at night\" or \"why my baby is not sleeping deeply\"? You're not alone, and this guide is...",
  date: 'August 7, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/newborn-sleep.jpg?v=1740000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/the-importance-of-sleep-in-newborns'
},
{
  id: '16',
  title: '7 Most Stylish Hairstyles for Kids and Little Boys in 2025',
  excerpt: 'You take your son to the salon. You ask for a "simple haircut." But the moment he sees it in the mirror? He hates it. Sound familiar? Choosing little boy...',
  date: 'July 27, 2025',
  img: 'https://www.popees.com/cdn/shop/articles/kids-hairstyles.jpg?v=1739000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/hairstyles-for-little-boys'
},
{
  id: '17',
  title: "Why Choose Popees for Your Newborn's Clothing: Quality, Comfort, and Care",
  excerpt: 'As parents, we want nothing but the best for our newborns. The joy of welcoming a little one into the world is matched by the responsibility of making sure...',
  date: 'January 4, 2025',
  img: 'https://www.popees.com/cdn/shop/files/Just_Arrived.jpg?v=1782889157&width=600',
  href: 'https://www.popees.com/blogs/all-blog/why-choose-popees-for-your-newborns-clothing-quality-comfort-and-care'
},
{
  id: '18',
  title: 'Why is kids fashion considered underrated?',
  excerpt: 'Right from their first years of life, every tot loves to become fashionable and cool in their own ways. Just like adults, younger ones also try to be in line...',
  date: 'May 16, 2024',
  img: 'https://www.popees.com/cdn/shop/articles/kids-fashion.jpg?v=1738000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/why-is-kids-fashion-considered-underrated'
},
{
  id: '19',
  title: 'Seven Important Facts That You Should Know About Kids Fashion',
  excerpt: 'Every little tot out there adores dolling upmost stylishly right from their first years of life. Not only kids but also their parents find it fulfilling to cram up their...',
  date: 'May 16, 2024',
  img: 'https://www.popees.com/cdn/shop/articles/kids-fashion-facts.jpg?v=1738000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/seven-important-facts-that-you-should-know-about-kids-fashion-baby-care'
},
{
  id: '20',
  title: 'Why the products of Popees are special?',
  excerpt: 'Popees has by now emerged as the one stop destination of kid\'s products galore. Each and every product rendered from Popees are packed with a thing or two that every...',
  date: 'May 16, 2024',
  img: 'https://www.popees.com/cdn/shop/articles/popees-special.jpg?v=1738000000&width=1100',
  href: 'https://www.popees.com/blogs/all-blog/why-the-products-of-popees-are-special-baby-care'
}];


export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Page Title */}
        <div className="text-center py-10 px-4">
          <h1
            className="text-3xl font-medium"
            style={{
              fontFamily: 'Comfortaa, cursive',
              color: '#e21a5a',
              letterSpacing: '0.02em'
            }}>
            
            all blogs
          </h1>
        </div>

        {/* Blog List - alternating layout like original */}
        <div className="max-w-[1200px] mx-auto px-4 pb-16">
          <div className="space-y-0">
            {blogPosts.map((post, index) =>
            <article
              key={post.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-gray-100 last:border-0">
              
                {/* Image - alternates left/right */}
                <div
                className={`relative overflow-hidden ${
                index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`
                }
                style={{ minHeight: '320px' }}>
                
                  <Link href={post.href} target="_blank" rel="noopener noreferrer">
                    <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized />
                  
                  </Link>
                </div>

                {/* Content */}
                <div
                className={`flex flex-col justify-center px-8 py-10 ${
                index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`
                }>
                
                  <Link href={post.href} target="_blank" rel="noopener noreferrer">
                    <h2
                    className="text-xl font-semibold text-gray-900 hover:text-[#e21a5a] transition-colors mb-3 leading-snug"
                    style={{ fontFamily: 'Comfortaa, cursive' }}>
                    
                      {post.title}
                    </h2>
                  </Link>
                  <time className="text-sm text-gray-500 mb-3">{post.date}</time>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-[#e21a5a] transition-colors">
                  
                    Read more...
                  </Link>
                </div>
              </article>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}