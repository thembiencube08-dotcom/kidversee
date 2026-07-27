'use client';
import React, { useState } from 'react';
import Link from 'next/link';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socialLinks = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/popeesbabycare',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/popeesbabycare/?hl=en',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      label: 'Youtube',
      href: 'https://www.youtube.com/channel/UCt0BZxfcDuVfOVtcCRBuqsA',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: 'Twitter',
      href: 'https://x.com/popeesbabycare',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/company/popees-baby-care/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="max-w-[1200px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <div>
              <h1
                className="text-2xl font-semibold text-gray-900 mb-8"
                style={{ fontFamily: 'Comfortaa, cursive' }}
              >
                Get in Touch
              </h1>

              {/* Address */}
              <div className="mb-6">
                <h2 className="text-base font-bold text-gray-900 mb-2">Address:</h2>
                <div>
                  <h3 className="text-sm text-gray-700 leading-relaxed">
                    Popees Tower, Opp. Poonthottam Bus Stop,
                    <br />
                    Post, Thiruvali, Malappuram, Kerala, 676123
                  </h3>
                  <ul className="mt-3 space-y-1">
                    <li>
                      <h3 className="text-sm text-gray-700">
                        <span className="font-semibold">PHONE:</span>{' '}
                        <Link
                          href="tel:9072113911"
                          className="text-[#e21a5a] hover:underline"
                        >
                          +91 90721 13911
                        </Link>
                      </h3>
                    </li>
                    <li>
                      <h3 className="text-sm text-gray-700">
                        <span className="font-semibold">EMAIL:</span>{' '}
                        <Link
                          href="mailto:online@popees.com"
                          className="text-[#e21a5a] hover:underline"
                        >
                          online@popees.com
                        </Link>
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mb-6">
                <h2 className="text-base font-bold text-gray-900 mb-2">Opening Hours:</h2>
                <h3 className="text-sm text-gray-700">Mon - Saturday :09.00 AM - 06.00 PM</h3>
              </div>

              {/* Stay Connected */}
              <div className="mb-6">
                <h2 className="text-base font-bold text-gray-900 mb-3">Stay Connected</h2>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#e21a5a] hover:text-white transition-all duration-200"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="mt-6 rounded-lg overflow-hidden border border-gray-200" style={{ height: '280px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d76.0!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3NsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Popees Location"
                />
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center mt-16">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-[#e21a5a] text-sm font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Name"
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#e21a5a] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Email <span className="text-[#e21a5a]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email*"
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#e21a5a] transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone"
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#e21a5a] transition-colors"
                    />
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">Comment</label>
                    <textarea
                      rows={6}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Comment"
                      className="w-full border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:border-[#e21a5a] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="bg-[#e21a5a] text-white text-sm font-medium px-8 py-2.5 rounded hover:bg-[#c4134b] transition-colors"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
