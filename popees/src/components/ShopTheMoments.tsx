'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const moments = [
  {
    href: '/collections/baby-new',
    poster: 'https://www.popees.com/cdn/shop/files/You_Baby_-_Header.jpg?v=1775190834&width=828',
    video: 'https://www.popees.com/cdn/shop/videos/c/vp/a5e6866478f5446a809b9d20dfeb0512/a5e6866478f5446a809b9d20dfeb0512.HD-720p-1.6Mbps-76922899.mp4',
    alt: 'Baby collection',
  },
  {
    href: '/collections/girls-new',
    poster: 'https://www.popees.com/cdn/shop/files/You_Baby_-_Mobile.jpg?v=1775190837&width=828',
    video: 'https://www.popees.com/cdn/shop/videos/c/vp/34e9180ed43744f1a82936c8e8522808/34e9180ed43744f1a82936c8e8522808.SD-480p-0.9Mbps-76923015.mp4',
    alt: 'Girls collection',
  },
  {
    href: '/collections/boys-new',
    poster: 'https://www.popees.com/cdn/shop/files/You_Baby_Footer_-_Mobile.jpg?v=1775190740&width=828',
    video: 'https://www.popees.com/cdn/shop/videos/c/vp/3be058d786ed47baa2c7873b1a152921/3be058d786ed47baa2c7873b1a152921.SD-480p-0.9Mbps-76923082.mp4',
    alt: 'Boys collection',
  },
  {
    href: '/collections/baby-clothing',
    poster: '/assets/images/toys/baby-playgym-2.jpg',
    video: 'https://www.popees.com/cdn/shop/videos/c/vp/a5e6866478f5446a809b9d20dfeb0512/a5e6866478f5446a809b9d20dfeb0512.HD-720p-1.6Mbps-76922899.mp4',
    alt: 'Baby collection video',
  },
  {
    href: '/collections/maternity-wear',
    // poster falls back to the remote image until a video is dropped into
    // public/assets/videos/ — name the file exactly as referenced below.
    poster: 'https://www.popees.com/cdn/shop/files/Maternity_Wear.jpg?v=1772273982&width=828',
    video: '/assets/videos/maternity-rubbing-belly-smiling.mp4',
    alt: 'Maternity wear',
  },
];

function VideoCard({
  href,
  poster,
  video,
  alt,
  sectionVisible,
}: {
  href: string;
  poster: string;
  video: string | null;
  alt: string;
  sectionVisible: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Auto-play as soon as the section scrolls into view
  useEffect(() => {
    const el = videoRef.current;
    if (!el || !video) return;

    if (sectionVisible) {
      el.play()
        .then(() => setPlaying(true))
        .catch(() => {
          // autoplay blocked — stay on poster
          setPlaying(false);
        });
    } else {
      el.pause();
      el.currentTime = 0;
      setPlaying(false);
    }
  }, [sectionVisible, video]);

  return (
    <Link
      href={href}
      className="group relative flex-shrink-0 w-[42vw] md:w-0 md:flex-1 rounded-2xl overflow-hidden bg-[#f5e8e8] block"
      style={{ aspectRatio: '9/16' }}
    >
      {video ? (
        <>
          {/* Poster — shown until video starts */}
          <div
            className={`absolute inset-0 transition-opacity duration-500 ${playing ? 'opacity-0' : 'opacity-100'}`}
          >
            <Image
              src={poster}
              alt={alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 42vw, 20vw"
            />
          </div>

          {/* Video */}
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${playing ? 'opacity-100' : 'opacity-0'}`}
          >
            <source src={video} type="video/mp4" />
          </video>
        </>
      ) : (
        <Image
          src={poster}
          alt={alt}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 42vw, 20vw"
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300" />

      {/* Play button — only when not yet playing */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-black/70 flex items-center justify-center shadow-lg">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Popees logo watermark */}
      <div className="absolute top-3 left-0 right-0 flex justify-center pointer-events-none">
        <span
          className="text-[#e21a5a] font-bold text-xs tracking-wide drop-shadow-sm"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          <span className="text-base">p</span>opees
        </span>
      </div>
    </Link>
  );
}

export default function ShopTheMoments() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  // Watch when the section enters the viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.25 } // start playing once 25% of the section is visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-heading font-bold text-[#e21a5a] text-center mb-10">
          shop the moments
        </h2>

        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 md:overflow-visible">
          {moments.map((item, i) => (
            <VideoCard
              key={i}
              href={item.href}
              poster={item.poster}
              video={item.video}
              alt={item.alt}
              sectionVisible={sectionVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
