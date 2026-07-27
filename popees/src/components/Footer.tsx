'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  brand: [
  { label: 'Why Popees?', href: '/pages/why-popees-baby-care' },
  { label: 'Our Mission', href: '/pages/our-mission' },
  { label: 'CSR Initiatives', href: '/pages/csr-initiatives' }],

  quickLinks: [
  { label: 'Boys Party Wears', href: '/collections/party-wears' },
  { label: 'Dresses', href: '/collections/dresses' },
  { label: 'Trendy Fashion', href: '/collections/trendy-fashion' },
  { label: 'Body Suites', href: '/collections/body-suites' }],

  support: [
  { label: "FAQ\'s", href: '/pages/faqs' },
  { label: 'Contact Us', href: '/pages/contact' },
  { label: 'All Products', href: '/collections/all' },
  { label: 'Make your kit', href: '/pages/make-your-kit' },
  { label: 'Order and Returns', href: '#' },
  { label: 'Return and refund policy', href: '/policies/refund-policy' }],

  company: [
  { label: 'Our Policies', href: '/pages/our-policies' },
  { label: 'Events', href: '/pages/events' },
  { label: 'Blogs', href: '/blogs/all-blog' },
  { label: 'Terms & Conditions', href: '/policies/terms-of-service' },
  { label: 'Privacy Policy', href: '/policies/privacy-policy' },
  { label: 'Store Locator', href: '/pages/store-locator' }]

};

const popularCategories = [
{ label: 'Baby Boys Dress', href: 'https://www.popees.com/collections/baby-boys' },
{ label: 'Baby Girls Dress', href: 'https://www.popees.com/collections/baby-girls' },
{ label: 'Onesies & Rompers', href: 'https://www.popees.com/collections/onesies-baby-care' },
{ label: 'Bamboo Collection', href: 'https://www.popees.com/collections/bamboo' },
{ label: 'Baby Essentials', href: 'https://www.popees.com/collections/baby-essentials' },
{ label: 'Jhablas', href: 'https://www.popees.com/collections/Jhablas' },
{ label: 'Body Suits', href: 'https://www.popees.com/collections/body-suits' },
{ label: 'Sleep Suits', href: 'https://www.popees.com/collections/sleep-suits' },
{ label: 'Shorts', href: 'https://www.popees.com/collections/0-9-months-shorts' },
{ label: 'Pants', href: 'https://www.popees.com/collections/0-9-months-pants' },
{ label: 'Metal Cradles', href: 'https://www.popees.com/collections/metal-cradles' },
{ label: 'Wooden Cradles', href: 'https://www.popees.com/collections/wooden-cradles' },
{ label: 'Sun Glasses', href: 'https://www.popees.com/collections/sun-glasses' },
{ label: 'Baby Diapers', href: 'https://www.popees.com/collections/diapers' },
{ label: 'Baby Wet Wipes', href: 'https://www.popees.com/collections/Baby-wipes' },
{ label: 'Feeding Bottles', href: 'https://www.popees.com/collections/feeding-bottles' },
{ label: 'Maternity Wear', href: 'https://www.popees.com/collections/maternity-wear' },
{ label: 'Baby Toys', href: 'https://www.popees.com/collections/toys-gaming-baby-care' }];


const socialLinks = [
{
  label: 'Facebook',
  href: 'https://www.facebook.com/popeesbabycare/',
  icon:
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>

},
{
  label: 'Instagram',
  href: 'https://www.instagram.com/popeesbabycare/',
  icon:
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>

},
{
  label: 'Youtube',
  href: 'https://www.youtube.com/channel/UCt0BZxfcDuVfOVtcCRBuqsA',
  icon:
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>

},
{
  label: 'Twitter',
  href: 'https://x.com/popeesbabycare',
  icon:
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>

},
{
  label: 'LinkedIn',
  href: 'https://www.linkedin.com/company/popees-baby-care/',
  icon:
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>

},
{
  label: 'WhatsApp',
  href: 'https://wa.me/9072113911',
  icon:
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>

}];


export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-white">
      {/* Popular Categories */}
      <div className="bg-[#fff3f3] py-6 border-t border-[#fce4ec]">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="text-sm font-bold text-gray-800 mb-3">
            <strong>Popular Categories</strong>
          </h2>
          <p className="text-sm text-gray-600 flex flex-wrap gap-1">
            {popularCategories?.map((cat, i) =>
            <span key={cat?.label} className="flex items-center">
                <Link href={cat?.href} className="hover:text-[#e21a5a] transition-colors">
                  {cat?.label}
                </Link>
                {i < popularCategories?.length - 1 && <span className="mx-1 text-gray-400">|</span>}
              </span>
            )}
          </p>
        </div>
      </div>
      {/* Main Footer */}
      <div className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-heading font-bold text-[#e21a5a] mb-1">
                be the <span className="block">first to know</span>
              </h2>
              <div className="flex items-center gap-2 mt-4 mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  placeholder="Email"
                  className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#e21a5a] transition-colors" />
                
                <button className="w-10 h-10 bg-[#e21a5a] rounded-full flex items-center justify-center hover:bg-[#c4134b] transition-colors flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-500">
                Subscribe for exclusive offers, new arrivals, and special surprises.
              </p>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Brand */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Brand</h3>
                <ul className="space-y-2">
                  {footerLinks?.brand?.map((link) =>
                  <li key={link?.label}>
                      <Link href={link?.href} className="text-sm text-gray-600 hover:text-[#e21a5a] transition-colors">
                        {link?.label}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Quick Links</h3>
                <ul className="space-y-2">
                  {footerLinks?.quickLinks?.map((link) =>
                  <li key={link?.label}>
                      <Link href={link?.href} className="text-sm text-gray-600 hover:text-[#e21a5a] transition-colors">
                        {link?.label}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
              {/* Customer Support */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Customer Support</h3>
                <ul className="space-y-2">
                  {footerLinks?.support?.map((link) =>
                  <li key={link?.label}>
                      <Link href={link?.href} className="text-sm text-gray-600 hover:text-[#e21a5a] transition-colors">
                        {link?.label}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
              {/* Company Info */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">Company Info</h3>
                <ul className="space-y-2">
                  {footerLinks?.company?.map((link) =>
                  <li key={link?.label}>
                      <Link href={link?.href} className="text-sm text-gray-600 hover:text-[#e21a5a] transition-colors">
                        {link?.label}
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Social + Logo */}
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social */}
            <div>
              <p className="text-sm font-bold text-gray-800 mb-3">Socials</p>
              <div className="flex items-center gap-3">
                {socialLinks?.map((social) =>
                <Link
                  key={social?.label}
                  href={social?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#e21a5a] hover:text-white transition-all duration-200"
                  aria-label={social?.label}>
                  
                    {social?.icon}
                  </Link>
                )}
              </div>
            </div>

            {/* Logo */}
            <Link href="/">
              <Image
                src="https://www.popees.com/cdn/shop/files/Popees_newest_logo.png?v=1774343367&width=1920"
                alt="Popees Baby Care"
                width={120}
                height={42}
                className="h-10 w-auto object-contain" />
              
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-100 py-4">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            &copy; 2026{' '}
            <Link href="/" className="hover:text-[#e21a5a] transition-colors">Popees Baby Care</Link>
            . All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500">
            Designed by{' '}
            <Link href="https://maydayinternet.com/?utm_source=popees_website" target="_blank" rel="noopener noreferrer" className="hover:text-[#e21a5a] transition-colors">
              Mayday Internet
            </Link>
          </p>
        </div>
      </div>
    </footer>);

}