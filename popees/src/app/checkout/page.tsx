'use client';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCart } from '@/lib/cartContext';

type Step = 'shipping' | 'billing' | 'review';

interface Address {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

const EMPTY_ADDRESS: Address = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
  country: 'India',
};

const PROMO_CODES: Record<string, number> = {
  POPEES10: 10,
  BABY20: 20,
  WELCOME15: 15,
};

const STEPS: { id: Step; label: string; num: number }[] = [
  { id: 'shipping', label: 'Shipping', num: 1 },
  { id: 'billing', label: 'Billing', num: 2 },
  { id: 'review', label: 'Review & Pay', num: 3 },
];

function AddressForm({
  title,
  data,
  onChange,
  showEmail = false,
}: {
  title: string;
  data: Address;
  onChange: (field: keyof Address, value: string) => void;
  showEmail?: boolean;
}) {
  const inputCls =
    'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#e21a5a] focus:ring-1 focus:ring-[#e21a5a] transition-colors bg-white';
  const labelCls = 'block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide';

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>First Name *</label>
          <input
            className={inputCls}
            placeholder="First name"
            value={data.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls}>Last Name *</label>
          <input
            className={inputCls}
            placeholder="Last name"
            value={data.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
          />
        </div>
        {showEmail && (
          <div className="sm:col-span-2">
            <label className={labelCls}>Email *</label>
            <input
              type="email"
              className={inputCls}
              placeholder="you@example.com"
              value={data.email}
              onChange={(e) => onChange('email', e.target.value)}
            />
          </div>
        )}
        <div className="sm:col-span-2">
          <label className={labelCls}>Phone *</label>
          <input
            type="tel"
            className={inputCls}
            placeholder="+91 98765 43210"
            value={data.phone}
            onChange={(e) => onChange('phone', e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Address Line 1 *</label>
          <input
            className={inputCls}
            placeholder="House / Flat / Block No."
            value={data.address1}
            onChange={(e) => onChange('address1', e.target.value)}
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Address Line 2</label>
          <input
            className={inputCls}
            placeholder="Street / Area / Locality"
            value={data.address2}
            onChange={(e) => onChange('address2', e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls}>City *</label>
          <input
            className={inputCls}
            placeholder="City"
            value={data.city}
            onChange={(e) => onChange('city', e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls}>State *</label>
          <input
            className={inputCls}
            placeholder="State"
            value={data.state}
            onChange={(e) => onChange('state', e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls}>PIN Code *</label>
          <input
            className={inputCls}
            placeholder="PIN Code"
            value={data.zip}
            onChange={(e) => onChange('zip', e.target.value)}
          />
        </div>
        <div>
          <label className={labelCls}>Country</label>
          <select
            className={inputCls}
            value={data.country}
            onChange={(e) => onChange('country', e.target.value)}
          >
            <option>India</option>
            <option>United Arab Emirates</option>
            <option>United Kingdom</option>
            <option>United States</option>
          </select>
        </div>
      </div>
    </div>
  );
}

function validateAddress(addr: Address, requireEmail = false): boolean {
  const required: (keyof Address)[] = ['firstName', 'lastName', 'phone', 'address1', 'city', 'state', 'zip'];
  if (requireEmail) required.push('email');
  return required.every((f) => addr[f].trim() !== '');
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<Step>('shipping');
  const [shipping, setShipping] = useState<Address>({ ...EMPTY_ADDRESS });
  const [billing, setBilling] = useState<Address>({ ...EMPTY_ADDRESS });
  const [sameAsShipping, setSameAsShipping] = useState(true);
  const [promoCode, setPromoCode] = useState('');
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [shippingError, setShippingError] = useState('');
  const [billingError, setBillingError] = useState('');

  const shippingCost = totalPrice >= 499 ? 0 : 49;
  const discountAmount = (totalPrice * promoDiscount) / 100;
  const grandTotal = totalPrice + shippingCost - discountAmount;

  const updateShipping = useCallback((field: keyof Address, value: string) => {
    setShipping((prev) => ({ ...prev, [field]: value }));
    setShippingError('');
  }, []);

  const updateBilling = useCallback((field: keyof Address, value: string) => {
    setBilling((prev) => ({ ...prev, [field]: value }));
    setBillingError('');
  }, []);

  const handleApplyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (!code) {
      setPromoError('Please enter a promo code.');
      return;
    }
    if (PROMO_CODES[code]) {
      setPromoCode(code);
      setPromoDiscount(PROMO_CODES[code]);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try POPEES10, BABY20, or WELCOME15.');
      setPromoCode('');
      setPromoDiscount(0);
    }
  };

  const handleRemovePromo = () => {
    setPromoCode('');
    setPromoInput('');
    setPromoDiscount(0);
    setPromoError('');
  };

  const goToStep = (target: Step) => {
    if (target === 'billing') {
      if (!validateAddress(shipping, true)) {
        setShippingError('Please fill in all required fields.');
        return;
      }
      if (sameAsShipping) {
        setBilling({ ...shipping });
      }
    }
    if (target === 'review') {
      const billingToCheck = sameAsShipping ? shipping : billing;
      if (!validateAddress(billingToCheck)) {
        setBillingError('Please fill in all required fields.');
        return;
      }
    }
    setStep(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlaceOrder = () => {
    const placedAt = new Date().toISOString();
    const orderNumber = 'POP-' + Math.random().toString(36).substring(2, 10).toUpperCase();
    const orderData = {
      orderNumber,
      items,
      shippingAddress: { ...shipping },
      subtotal: totalPrice,
      shippingCost,
      discountAmount,
      grandTotal,
      promoCode: promoCode || undefined,
      placedAt,
    };
    const encoded = encodeURIComponent(JSON.stringify(orderData));
    if (typeof clearCart === 'function') clearCart();
    router.push(`/order-confirmation?data=${encoded}`);
  };

  const currentStep = STEPS.findIndex((s) => s.id === step);

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#fdf8f5] flex flex-col items-center justify-center px-4 py-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Placed!</h1>
          <p className="text-gray-500 text-sm mb-1">Thank you, {shipping.firstName}!</p>
          <p className="text-gray-400 text-sm mb-8">
            Your order of <span className="font-semibold text-gray-700">₹{grandTotal.toFixed(2)}</span> has been confirmed. You'll receive a confirmation shortly.
          </p>
          <Link
            href="/"
            className="inline-block bg-[#e21a5a] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#c4134b] transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#fdf8f5] flex flex-col items-center justify-center px-4 py-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 max-w-md w-full text-center">
          <svg className="w-16 h-16 text-gray-200 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-400 text-sm mb-6">Add items to your cart before checking out.</p>
          <Link
            href="/"
            className="inline-block bg-[#e21a5a] text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#c4134b] transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fdf8f5]">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[#e21a5a] font-bold text-xl tracking-tight">Popees</span>
          </Link>
          {/* Step indicator */}
          <div className="flex items-center gap-1 sm:gap-3">
            {STEPS.map((s, idx) => (
              <React.Fragment key={s.id}>
                <div className="flex items-center gap-1.5">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                      idx < currentStep
                        ? 'bg-green-500 text-white'
                        : idx === currentStep
                        ? 'bg-[#e21a5a] text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {idx < currentStep ? (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      s.num
                    )}
                  </div>
                  <span
                    className={`text-xs font-semibold hidden sm:block ${
                      idx === currentStep ? 'text-[#e21a5a]' : idx < currentStep ? 'text-green-600' : 'text-gray-400'
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
                {idx < STEPS.length - 1 && (
                  <div className={`w-6 sm:w-10 h-0.5 rounded-full ${idx < currentStep ? 'bg-green-400' : 'bg-gray-200'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
          <Link href="/" className="text-xs text-gray-400 hover:text-[#e21a5a] transition-colors hidden sm:block">
            ← Back to shop
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
        {/* Left: Form area */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          {/* STEP 1: Shipping */}
          {step === 'shipping' && (
            <div>
              <AddressForm
                title="Shipping Address"
                data={shipping}
                onChange={updateShipping}
                showEmail
              />
              {shippingError && (
                <p className="mt-4 text-sm text-red-500 font-medium">{shippingError}</p>
              )}
              <button
                onClick={() => goToStep('billing')}
                className="mt-8 w-full bg-[#e21a5a] text-white py-3.5 rounded-full font-semibold text-sm hover:bg-[#c4134b] transition-colors"
              >
                Continue to Billing →
              </button>
            </div>
          )}

          {/* STEP 2: Billing */}
          {step === 'billing' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Billing Address</h2>
                <button
                  onClick={() => setStep('shipping')}
                  className="text-xs text-[#e21a5a] font-semibold hover:underline"
                >
                  ← Edit Shipping
                </button>
              </div>

              {/* Same as shipping toggle */}
              <label className="flex items-center gap-3 cursor-pointer mb-6 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-[#e21a5a]/30 transition-colors">
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                    sameAsShipping ? 'bg-[#e21a5a] border-[#e21a5a]' : 'border-gray-300 bg-white'
                  }`}
                  onClick={() => setSameAsShipping((v) => !v)}
                >
                  {sameAsShipping && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-700">Same as shipping address</span>
              </label>

              {!sameAsShipping && (
                <>
                  <AddressForm title="" data={billing} onChange={updateBilling} />
                  {billingError && (
                    <p className="mt-2 text-sm text-red-500 font-medium">{billingError}</p>
                  )}
                </>
              )}

              {sameAsShipping && (
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-4 text-sm text-gray-600 space-y-1">
                  <p className="font-semibold text-gray-800">{shipping.firstName} {shipping.lastName}</p>
                  <p>{shipping.address1}{shipping.address2 ? `, ${shipping.address2}` : ''}</p>
                  <p>{shipping.city}, {shipping.state} – {shipping.zip}</p>
                  <p>{shipping.country}</p>
                  <p className="text-gray-500">{shipping.phone}</p>
                </div>
              )}

              <button
                onClick={() => goToStep('review')}
                className="mt-8 w-full bg-[#e21a5a] text-white py-3.5 rounded-full font-semibold text-sm hover:bg-[#c4134b] transition-colors"
              >
                Continue to Review →
              </button>
            </div>
          )}

          {/* STEP 3: Review */}
          {step === 'review' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Review Your Order</h2>
                <button
                  onClick={() => setStep('billing')}
                  className="text-xs text-[#e21a5a] font-semibold hover:underline"
                >
                  ← Edit Billing
                </button>
              </div>

              {/* Address summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Shipping To</p>
                  <p className="text-sm font-semibold text-gray-800">{shipping.firstName} {shipping.lastName}</p>
                  <p className="text-sm text-gray-500">{shipping.address1}</p>
                  <p className="text-sm text-gray-500">{shipping.city}, {shipping.state} – {shipping.zip}</p>
                  <p className="text-sm text-gray-500">{shipping.phone}</p>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Billing Address</p>
                  {sameAsShipping ? (
                    <p className="text-sm text-gray-500 italic">Same as shipping</p>
                  ) : (
                    <>
                      <p className="text-sm font-semibold text-gray-800">{billing.firstName} {billing.lastName}</p>
                      <p className="text-sm text-gray-500">{billing.address1}</p>
                      <p className="text-sm text-gray-500">{billing.city}, {billing.state} – {billing.zip}</p>
                    </>
                  )}
                </div>
              </div>

              {/* Order items */}
              <div className="border border-gray-100 rounded-xl overflow-hidden mb-6">
                <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-100">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    {items.length} {items.length === 1 ? 'Item' : 'Items'}
                  </p>
                </div>
                <div className="divide-y divide-gray-50">
                  {items.map((item) => {
                    const key = `${item.id}-${item.size ?? ''}`;
                    const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
                    return (
                      <div key={key} className="flex items-center gap-3 px-4 py-3">
                        <div className="relative w-14 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50">
                          <Image
                            src={item.img}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                            unoptimized
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-800 line-clamp-1">{item.name}</p>
                          {item.size && <p className="text-xs text-gray-400">Size: {item.size}</p>}
                          <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-bold text-gray-800 flex-shrink-0">
                          ₹{(isNaN(price) ? 0 : price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Promo code */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-700 mb-2">Promo Code</p>
                {promoCode ? (
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-semibold text-green-700 flex-1">
                      {promoCode} — {promoDiscount}% off applied!
                    </span>
                    <button
                      onClick={handleRemovePromo}
                      className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <input
                      className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#e21a5a] focus:ring-1 focus:ring-[#e21a5a] transition-colors uppercase"
                      placeholder="Enter promo code"
                      value={promoInput}
                      onChange={(e) => {
                        setPromoInput(e.target.value);
                        setPromoError('');
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && handleApplyPromo()}
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-700 transition-colors flex-shrink-0"
                    >
                      Apply
                    </button>
                  </div>
                )}
                {promoError && <p className="mt-1.5 text-xs text-red-500">{promoError}</p>}
                {!promoCode && (
                  <p className="mt-1.5 text-xs text-gray-400">Try: POPEES10, BABY20, or WELCOME15</p>
                )}
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-[#e21a5a] text-white py-4 rounded-full font-bold text-base hover:bg-[#c4134b] transition-colors shadow-md shadow-[#e21a5a]/20"
              >
                Place Order · ₹{grandTotal.toFixed(2)}
              </button>
              <p className="text-xs text-gray-400 text-center mt-3">
                🔒 Secure checkout · Your data is protected
              </p>
            </div>
          )}
        </div>

        {/* Right: Order summary */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 lg:sticky lg:top-24">
          <h3 className="text-base font-bold text-gray-900 mb-4">Order Summary</h3>

          {/* Items list */}
          <div className="space-y-3 mb-4 max-h-64 overflow-y-auto pr-1">
            {items.map((item) => {
              const key = `${item.id}-${item.size ?? ''}`;
              const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
              return (
                <div key={key} className="flex items-center gap-3">
                  <div className="relative w-12 h-14 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                      unoptimized
                    />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#e21a5a] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-700 line-clamp-2 leading-snug">{item.name}</p>
                    {item.size && <p className="text-[10px] text-gray-400">Size: {item.size}</p>}
                  </div>
                  <p className="text-xs font-bold text-gray-800 flex-shrink-0">
                    ₹{(isNaN(price) ? 0 : price * item.quantity).toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="border-t border-gray-100 pt-4 space-y-2.5">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Subtotal</span>
              <span className="font-medium text-gray-800">₹{totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Shipping</span>
              <span className={shippingCost === 0 ? 'text-green-600 font-medium' : 'font-medium text-gray-800'}>
                {shippingCost === 0 ? 'FREE' : `₹${shippingCost.toFixed(2)}`}
              </span>
            </div>
            {promoDiscount > 0 && (
              <div className="flex justify-between text-sm text-green-600">
                <span>Promo ({promoCode})</span>
                <span className="font-medium">−₹{discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-gray-100 pt-3 flex justify-between">
              <span className="text-base font-bold text-gray-900">Total</span>
              <span className="text-base font-bold text-[#e21a5a]">₹{grandTotal.toFixed(2)}</span>
            </div>
          </div>

          {shippingCost > 0 && (
            <p className="mt-3 text-xs text-gray-400 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
              Add ₹{(499 - totalPrice).toFixed(0)} more for free shipping!
            </p>
          )}
          {shippingCost === 0 && (
            <p className="mt-3 text-xs text-green-600 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
              ✓ You qualify for free shipping!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
