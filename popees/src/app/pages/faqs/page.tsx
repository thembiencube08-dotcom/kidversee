import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How long does delivery take?',
        a: 'Standard delivery takes 3-7 business days. Express delivery (1-2 business days) is available for select pin codes. You will receive a tracking number once your order is shipped.'
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Yes! We offer free shipping on all orders above Rs. 499. For orders below Rs. 499, a nominal shipping fee applies.'
      },
      {
        q: 'Can I track my order?',
        a: 'Absolutely! Once your order is shipped, you will receive an email and SMS with your tracking details. You can track your order on our website or through the courier partner\'s website.'
      },
      {
        q: 'Do you offer Cash on Delivery (COD)?',
        a: 'Yes, we offer Cash on Delivery for most pin codes across India. COD is available for orders up to Rs. 5,000.'
      }
    ]
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 7-day return policy from the date of delivery. Products must be unused, unwashed, and in their original packaging with all tags intact.'
      },
      {
        q: 'How do I initiate a return?',
        a: 'To initiate a return, contact our customer support team at support@popees.com or call us at +91 90721 13911. We will arrange a pickup from your doorstep.'
      },
      {
        q: 'When will I receive my refund?',
        a: 'Refunds are processed within 5-7 business days after we receive and inspect the returned product. The amount will be credited to your original payment method.'
      }
    ]
  },
  {
    category: 'Products & Quality',
    questions: [
      {
        q: 'Are Popees products safe for newborns?',
        a: 'Yes! All Popees products are dermatologist-reviewed and pediatrician-approved. We use GOTS certified organic fabrics and Azo-free dyes that are completely safe for newborns and infants.'
      },
      {
        q: 'What fabrics do you use?',
        a: 'We use a variety of premium fabrics including 100% organic cotton, bamboo cotton, muslin, and ribbed cotton. All fabrics are GOTS & Oeko-Tex certified and free from harmful chemicals.'
      },
      {
        q: 'How should I wash Popees baby clothes?',
        a: 'We recommend washing baby clothes in cold or lukewarm water using a mild, baby-safe detergent. Avoid bleach and fabric softeners. Tumble dry on low or air dry for best results.'
      },
      {
        q: 'Do you have a size guide?',
        a: 'Yes! Each product page includes a detailed size guide. Baby clothing sizes are based on age and weight. We recommend measuring your baby and comparing with our size chart for the best fit.'
      }
    ]
  },
  {
    category: 'Account & Payments',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit/debit cards, UPI, net banking, wallets (Paytm, PhonePe, Google Pay), and Cash on Delivery.'
      },
      {
        q: 'Is my payment information secure?',
        a: 'Yes, all payments are processed through secure, encrypted payment gateways. We do not store your card details on our servers.'
      },
      {
        q: 'Can I modify or cancel my order?',
        a: 'Orders can be modified or cancelled within 2 hours of placing them. After that, the order enters processing and cannot be changed. Please contact us immediately if you need to make changes.'
      }
    ]
  }
];

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="bg-[#fff3f3] py-12 px-4">
          <div className="max-w-[1400px] mx-auto">
            <nav className="text-sm text-gray-500 mb-4">
              <Link href="/" className="hover:text-[#e21a5a]">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-800">FAQs</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#ff5870]">Frequently Asked Questions</h1>
            <p className="text-gray-600 mt-2">Find answers to the most common questions about Popees products and services.</p>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-4 py-12">
          {faqs?.map((section) => (
            <div key={section?.category} className="mb-10">
              <h2 className="text-lg font-heading font-bold text-[#e21a5a] mb-4 pb-2 border-b border-[#fce4ec]">{section?.category}</h2>
              <div className="space-y-4">
                {section?.questions?.map((item, idx) => (
                  <details key={idx} className="group border border-gray-100 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors">
                      <span className="font-medium text-gray-900 pr-4">{item?.q}</span>
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-4 pb-4 pt-2 bg-gray-50">
                      <p className="text-gray-600 text-sm leading-relaxed">{item?.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="bg-[#fff3f3] rounded-2xl p-8 text-center mt-12">
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">Our customer support team is here to help you.</p>
            <Link
              href="/pages/contact"
              className="inline-flex items-center gap-2 bg-[#e21a5a] text-white px-6 py-3 rounded-full font-medium hover:bg-[#c4134b] transition-colors"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
