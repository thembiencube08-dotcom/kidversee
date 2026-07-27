'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
  id: string;
  title: string;
  price: string;
  salePrice?: string;
  comparePrice?: string;
  image: string;
  link: string;
  badge?: string;
  soldOut?: boolean;
  discount?: string;
}

const products: Product[] = [
{ id: '1', title: '3 In 1 Deluxe Play Gym N Pink', price: '$ 1,849.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bfc890dc-1766554301080.png", link: 'https://www.popees.com/products/3-in-1-deluxe-play-gym-n-pink?variant=56314591248550' },
{ id: '2', title: 'Baby Action Ball', price: '$ 399.00', image: 'https://www.popees.com/cdn/shop/files/Baby-Action-Ball_fc130c1f-4534-44c5-aeb5-63df475f205d.jpg?v=1774117760&width=600', link: 'https://www.popees.com/products/toy-pet-sniffy-the-dog-for-kids-copy?variant=56314593411238' },
{ id: '3', title: 'Baby Boys Checked Full Sleeve Cotton Shirt with Front Pocket| Grey| 9 Months to 4 Years', price: '$ 949.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_132eab440-1772822791008.png", link: 'https://www.popees.com/products/baby-boys-checked-cotton-shirt-grey-9-months-to-4-years?variant=56314662158502' },
{ id: '4', title: 'Baby Girls Floral Print Sleeveless Dress with Bow| White| 9 Months to 4 Years', price: '$ 999.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1036e4e5a-1779428453513.png", link: 'https://www.popees.com/products/baby-girls-sleeveless-dress-with-bow-white-9-months-to-4-years?variant=56314661896358' },
{ id: '5', title: 'Baby Popees Soft Cotton Baby Swaddle Wrapper with Cute Face Print', price: '$ 749.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_18898fc9b-1765125019904.png", link: 'https://www.popees.com/products/baby-swaddle-wrap-soft-hooded-quilted-wrapper-for-newborns-infants-printed-design-comes-with-a-free-dry-sheet-copy-1?variant=56314659700902' },
{ id: '6', title: 'Baby Powder for Delicate Skin 200g', price: '$ 790.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c5169907-1784804619393.png", link: 'https://www.popees.com/products/baby-powder-for-delicate-skin-200g?variant=56314640826534' },
{ id: '7', title: 'Baby Powder With Olive Oil for Delicate Skin, Extra soft Formula', price: '$ 420.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_18575a69d-1766853855434.png", link: 'https://www.popees.com/products/baby-powder-with-olive-oil-for-delicate-skin-extra-soft-formula?variant=56314638598310' },
{ id: '8', title: 'Baby Training Toothbrush Set', price: '$ 279.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_11779a909-1768386195562.png", link: 'https://www.popees.com/products/baby-training-toothbrush-set-white-pink?variant=56314639548582' },
{ id: '9', title: 'Banana Toothpaste for Children, Fluoride-Free & SLS-Free, Banana Flavor', price: '$ 175.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_111b49e4d-1777387280938.png", link: 'https://www.popees.com/products/toothpaste-for-children-banana-flavor?variant=56314640793766' },
{ id: '10', title: 'Colourful Learning Block for Kids', price: '$ 399.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_15ec06d00-1776915695389.png", link: 'https://www.popees.com/products/cute-musical-snail-for-kids-copy?variant=56314590363814' },
{ id: '11', title: 'Comfortable Cotton Maternity Dress', price: '$ 1,429.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a4ffbefc-1767887235531.png", link: 'https://www.popees.com/products/empire-waist-maternity-dress-baby-care?variant=56314558087334' },
{ id: '12', title: 'Comfy & Cute Printed Muslin Bodysuit for Boys', price: '$ 325.00', salePrice: '$ 325.00', comparePrice: '$ 649.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_18fd4dc1f-1784804618369.png", link: 'https://www.popees.com/products/comfy-cute-bodysuit-for-boys-copy-1?variant=56314546782374', soldOut: true },
{ id: '13', title: 'Cute Musical Snail for Kids', price: '$ 849.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_13e8bd911-1784804617065.png", link: 'https://www.popees.com/products/roly-poly-turtle-for-kids-copy?variant=56314590494886' },
{ id: '14', title: 'Elastic Suspenders With Leather Cross Patch', price: '$ 349.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7001043-1784804618887.png", link: 'https://www.popees.com/products/classic-suit-suspenders-copy?variant=56314543636646' },
{ id: '15', title: 'Fashionable All Over Printed Dress for Girls', price: '$ 300.00', salePrice: '$ 300.00', comparePrice: '$ 599.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1bc452e48-1784804618584.png", link: 'https://www.popees.com/products/fashionable-dress-for-girls?variant=56314494386342', discount: '50% OFF' },
{ id: '16', title: 'Flexible PP Bottle 120ml Nipple S (color may vary depending on availability)', price: '$ 245.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_1406b89f2-1784804619182.png", link: 'https://www.popees.com/products/flexible-pp-bottle-120ml-nipple-s-color-may-vary-depending-on-availability?variant=56314638663846' },
{ id: '17', title: 'Flexible PP Bottle 50ml Nipple (color may vary depending on availability)', price: '$ 199.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_160c994e3-1765080041271.png", link: 'https://www.popees.com/products/flexible-pp-bottle-50ml-nipple-color-may-vary-depending-on-availability?variant=56314640728230', soldOut: true },
{ id: '18', title: 'Food Feeder with Spoon 240ml (color may vary depending on availability)', price: '$ 399.00', image: "https://img.rocket.new/generatedImages/rocket_gen_img_106e77e38-1784804618891.png", link: 'https://www.popees.com/products/food-feeder-with-spoon-240mlcolor-may-vary-depending-on-availability?variant=56314640760998' },
{ id: '19', title: 'Free Wheel Earth Mover Toy for Babies', price: '$ 349.00', image: "https://images.unsplash.com/photo-1609570239848-d0842e9e0497", link: 'https://www.popees.com/products/free-wheel-earth-mover-toys-for-babies?variant=56314566017190', soldOut: true },
{ id: '20', title: 'Free Wheel Fire Engine Toy for Babies', price: '$ 999.00', image: "https://images.unsplash.com/photo-1602507007739-74db4eccac5c", link: 'https://www.popees.com/products/free-wheel-fire-engine-toys-for-babies-baby-care?variant=56314566836390' },
{ id: '21', title: 'Free Wheel Police Jeep Toy for Babies', price: '$ 399.00', image: "https://images.unsplash.com/photo-1613356364189-737fb7714541", link: 'https://www.popees.com/products/free-wheel-police-jeep-toys-for-babies-baby-care?variant=56314566213798' },
{ id: '22', title: 'Free Wheel Taxi Toy Car', price: '$ 125.00', image: 'https://www.popees.com/cdn/shop/files/74.jpg?v=1774117634&width=600', link: 'https://www.popees.com/products/high-speed-toy-car-copy-1?variant=56314545209510' },
{ id: '23', title: 'Free Wheel Toy Bus', price: '$ 125.00', image: 'https://www.popees.com/cdn/shop/files/77.jpg?v=1774117634&width=600', link: 'https://www.popees.com/products/high-speed-toy-car?variant=56314544062630' },
{ id: '24', title: 'Free Wheel Toy Car', price: '$ 125.00', image: 'https://www.popees.com/cdn/shop/files/76_ee5b1375-86a0-457d-8cb3-c91817d898b4.jpg?v=1774117634&width=600', link: 'https://www.popees.com/products/high-speed-toy-car-copy?variant=56314543374502' }];


const filterSections = [
{ label: 'Availability', options: ['In stock', 'Out of stock'] },
{ label: 'Gender', options: ['Baby Boys', 'Baby Girls', 'Baby Unisex'] },
{ label: 'Size & Fit', options: ['Preemie', 'Newborn', 'Extra Small (XS)', 'Small (S)', 'Medium (M)', 'Large (L)', 'Extra Large (XL)', 'Double Extra Large (XXL)', '0-3 M', '3-6 M', '6-9 M', '9-12 M', '12-18 M', '18-24 M'] },
{ label: 'Sleeve Type', options: ['3/4', 'Cap', 'Long', 'Short', 'Sleeveless'] },
{ label: 'Discount Range', options: ['40%', '50%', '70%', 'None', 'Bamboo', 'New'] }];


const colorSwatches = [
{ name: 'Beige', color: 'rgb(234 216 171)' },
{ name: 'Black', color: 'rgb(0 0 0)' },
{ name: 'Blue', color: 'rgb(0 91 211)' },
{ name: 'Brown', color: 'rgb(154 86 48)' },
{ name: 'Clear', color: 'rgb(255 255 255)', border: true },
{ name: 'Gray', color: 'rgb(128 128 128)' },
{ name: 'Green', color: 'rgb(5 170 61)' },
{ name: 'Navy', color: 'rgb(40 32 153)' },
{ name: 'Orange', color: 'rgb(255 138 0)' },
{ name: 'Pink', color: 'rgb(255 192 203)' },
{ name: 'Purple', color: 'rgb(165 77 207)' },
{ name: 'Red', color: 'rgb(246 31 31)' },
{ name: 'White', color: 'rgb(255 255 255)', border: true },
{ name: 'Yellow', color: 'rgb(255 229 0)' }];


const sortOptions = [
{ value: 'featured', label: 'Featured' },
{ value: 'most-relevant', label: 'Most relevant' },
{ value: 'best-selling', label: 'Best selling' },
{ value: 'title-ascending', label: 'Alphabetically, A-Z' },
{ value: 'title-descending', label: 'Alphabetically, Z-A' },
{ value: 'price-ascending', label: 'Price, low to high' },
{ value: 'price-descending', label: 'Price, high to low' },
{ value: 'created-ascending', label: 'Date, old to new' },
{ value: 'created-descending', label: 'Date, new to old' }];


interface FilterSectionProps {
  label: string;
  options: string[];
  selectedFilters: string[];
  onToggle: (option: string) => void;
}

function FilterSection({ label, options, selectedFilters, onToggle }: FilterSectionProps) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-100 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left">
        
        <span className="text-sm font-medium text-gray-800">{label}</span>
        <svg
          className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 14 14">
          
          <path d="M11 5.5L7 9.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open &&
      <ul className="mt-3 space-y-2">
          {options.map((option) =>
        <li key={option}>
              <label className="flex items-center gap-2 cursor-pointer group">
                <div
              onClick={() => onToggle(option)}
              className={`w-[22px] h-[22px] border rounded-[7px] flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors ${
              selectedFilters.includes(option) ?
              'bg-[#e21a5a] border-[#e21a5a]' :
              'border-gray-300 bg-white group-hover:border-gray-400'}`
              }>
              
                  {selectedFilters.includes(option) &&
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                      <path d="M4.75439 10.7485L7.68601 14.5888C7.79288 14.7288 7.84632 14.7988 7.91174 14.8242C7.96907 14.8466 8.03262 14.8469 8.09022 14.8253C8.15596 14.8007 8.21026 14.7314 8.31886 14.5927L15.2475 5.74658" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
              }
                </div>
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            </li>
        )}
        </ul>
      }
    </div>);

}

export default function ShopAllPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('title-ascending');
  const [sortOpen, setSortOpen] = useState(false);
  const [gridView, setGridView] = useState<'default' | 'zoom-out'>('default');
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [availabilityOpen, setAvailabilityOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [colorOpen, setColorOpen] = useState(true);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [availabilityFilters, setAvailabilityFilters] = useState<string[]>([]);

  const toggleFilter = (option: string) => {
    setSelectedFilters((prev) =>
    prev.includes(option) ? prev.filter((f) => f !== option) : [...prev, option]
    );
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]);
  };

  const toggleColor = (name: string) => {
    setSelectedColors((prev) =>
    prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  const toggleAvailability = (option: string) => {
    setAvailabilityFilters((prev) =>
    prev.includes(option) ? prev.filter((f) => f !== option) : [...prev, option]
    );
  };

  const currentSortLabel = sortOptions.find((s) => s.value === sortBy)?.label || 'Alphabetically, A-Z';

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="MainContent">
        {/* Page Title Section */}
        <div
          className="flex items-center justify-center bg-white"
          style={{ height: '160px', borderBottom: '1px solid #f5f5f5' }}>
          
          <h1
            className="font-heading font-bold text-[#ff5870] lowercase"
            style={{ fontSize: '2rem', letterSpacing: '-0.03em', lineHeight: 1 }}>
            
            products
          </h1>
        </div>

        {/* Main Content */}
        <div className="max-w-[1400px] mx-auto px-4 py-6">
          <div className="flex gap-0">
            {/* Sidebar Filters */}
            <aside className="hidden lg:block w-[280px] flex-shrink-0 pr-5">
              {/* Filters Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                <h2 className="text-base font-semibold text-gray-900">Filters</h2>
              </div>

              {/* Availability */}
              <div className="border-b border-gray-100 py-3">
                <button
                  onClick={() => setAvailabilityOpen(!availabilityOpen)}
                  className="w-full flex items-center justify-between text-left">
                  
                  <span className="text-sm font-medium text-gray-800">Availability</span>
                  <svg
                    className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${availabilityOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 14 14">
                    
                    <path d="M11 5.5L7 9.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {availabilityOpen &&
                <ul className="mt-3 space-y-2">
                    {['In stock', 'Out of stock'].map((option) =>
                  <li key={option}>
                        <label className="flex items-center gap-2 cursor-pointer group">
                          <div
                        onClick={() => toggleAvailability(option)}
                        className={`w-[22px] h-[22px] border rounded-[7px] flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors ${
                        availabilityFilters.includes(option) ?
                        'bg-[#e21a5a] border-[#e21a5a]' :
                        'border-gray-300 bg-white group-hover:border-gray-400'}`
                        }>
                        
                            {availabilityFilters.includes(option) &&
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                                <path d="M4.75439 10.7485L7.68601 14.5888C7.79288 14.7288 7.84632 14.7988 7.91174 14.8242C7.96907 14.8466 8.03262 14.8469 8.09022 14.8253C8.15596 14.8007 8.21026 14.7314 8.31886 14.5927L15.2475 5.74658" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                        }
                          </div>
                          <span className="text-sm text-gray-700">{option}</span>
                        </label>
                      </li>
                  )}
                  </ul>
                }
              </div>

              {/* Price Range */}
              <div className="border-b border-gray-100 py-3">
                <button
                  onClick={() => setPriceOpen(!priceOpen)}
                  className="w-full flex items-center justify-between text-left">
                  
                  <span className="text-sm font-medium text-gray-800">Price Range</span>
                  <svg
                    className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${priceOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 14 14">
                    
                    <path d="M11 5.5L7 9.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {priceOpen &&
                <div className="mt-3">
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <input
                        type="text"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                        placeholder="0"
                        className="w-full border border-gray-200 rounded px-3 py-2 text-sm pl-6 focus:outline-none focus:border-gray-400" />
                      
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">$</span>
                      </div>
                      <span className="text-sm text-gray-500">to</span>
                      <div className="relative flex-1">
                        <input
                        type="text"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder="4,500.00"
                        className="w-full border border-gray-200 rounded px-3 py-2 text-sm pl-6 focus:outline-none focus:border-gray-400" />
                      
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-sm text-gray-500">$</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">The highest price is $ 4,500.00</p>
                  </div>
                }
              </div>

              {/* Other Filter Sections */}
              {filterSections.slice(1).map((section) =>
              <FilterSection
                key={section.label}
                label={section.label}
                options={section.options}
                selectedFilters={selectedFilters}
                onToggle={toggleFilter} />

              )}

              {/* Color */}
              <div className="border-b border-gray-100 py-3">
                <button
                  onClick={() => setColorOpen(!colorOpen)}
                  className="w-full flex items-center justify-between text-left">
                  
                  <span className="text-sm font-medium text-gray-800">Color</span>
                  <svg
                    className={`w-3.5 h-3.5 text-gray-500 transition-transform duration-200 ${colorOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 14 14">
                    
                    <path d="M11 5.5L7 9.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {colorOpen &&
                <div className="mt-3">
                    <div className="grid grid-cols-3 gap-2">
                      {colorSwatches.map((swatch) =>
                    <button
                      key={swatch.name}
                      onClick={() => toggleColor(swatch.name)}
                      title={swatch.name}
                      className={`relative w-8 h-8 rounded-full transition-all ${
                      selectedColors.includes(swatch.name) ?
                      'ring-2 ring-[#e21a5a] ring-offset-1' :
                      'hover:ring-2 hover:ring-gray-300 hover:ring-offset-1'}`
                      }
                      style={{
                        backgroundColor: swatch.color,
                        border: swatch.border ? '1px solid #e5e7eb' : 'none'
                      }}
                      aria-label={swatch.name} />

                    )}
                    </div>
                  </div>
                }
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 min-w-0">
              {/* Top Controls Bar */}
              <div
                className="flex items-center justify-between mb-4 pb-3"
                style={{ borderBottom: '1px solid #f0f0f0' }}>
                
                {/* Left: Filters title + count */}
                <div className="flex items-center gap-4">
                  <h2 className="text-base font-semibold text-gray-900 hidden lg:block">Filters</h2>
                  <span className="text-sm text-gray-500">1081 items</span>
                </div>

                {/* Right: Sort + Grid Toggle */}
                <div className="flex items-center gap-3">
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setSortOpen(!sortOpen)}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors">
                      
                      <span className="font-medium">Sort</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform ${sortOpen ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 14 14">
                        
                        <path d="M11 5.5L7 9.5L3 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {sortOpen &&
                    <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-20 min-w-[200px] py-2">
                        {sortOptions.map((option) =>
                      <button
                        key={option.value}
                        onClick={() => {setSortBy(option.value);setSortOpen(false);}}
                        className={`w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                        sortBy === option.value ? 'text-gray-900 font-medium' : 'text-gray-600'}`
                        }>
                        
                            {sortBy === option.value &&
                        <svg className="w-4 h-4 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                                <path d="M4.75439 10.7485L7.68601 14.5888C7.79288 14.7288 7.84632 14.7988 7.91174 14.8242C7.96907 14.8466 8.03262 14.8469 8.09022 14.8253C8.15596 14.8007 8.21026 14.7314 8.31886 14.5927L15.2475 5.74658" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                        }
                            {sortBy !== option.value && <span className="w-4 flex-shrink-0" />}
                            {option.label}
                          </button>
                      )}
                      </div>
                    }
                  </div>

                  {/* Grid View Toggle */}
                  <div className="flex items-center gap-1">
                    {/* Default grid (2x2 squares) */}
                    <button
                      onClick={() => setGridView('default')}
                      className={`p-1.5 rounded transition-colors ${
                      gridView === 'default' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`
                      }
                      aria-label="Default grid">
                      
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.324 3.5H14.176C14.434 3.5 14.67 3.5 14.868 3.516C15.081 3.534 15.314 3.573 15.544 3.691C15.874 3.859 16.142 4.126 16.309 4.456C16.427 4.686 16.466 4.919 16.484 5.132C16.5 5.33 16.5 5.566 16.5 5.824V6.676C16.5 6.934 16.5 7.17 16.484 7.368C16.471 7.6027 16.4115 7.83248 16.309 8.044C16.1412 8.3734 15.8734 8.6412 15.544 8.809C15.3325 8.91164 15.1027 8.97113 14.868 8.984C14.67 9 14.434 9 14.176 9H13.324C13.066 9 12.83 9 12.632 8.984C12.3973 8.97103 12.1675 8.91154 11.956 8.809C11.6266 8.6412 11.3588 8.3734 11.191 8.044C11.0885 7.83248 11.029 7.6027 11.016 7.368C11 7.17 11 6.934 11 6.676V5.824C11 5.566 11 5.33 11.016 5.132C11.0289 4.89728 11.0884 4.66748 11.191 4.456C11.3585 4.12675 11.626 3.85897 11.955 3.691C12.185 3.573 12.419 3.534 12.632 3.516C12.83 3.5 13.066 3.5 13.324 3.5ZM5.824 3.5H6.676C6.934 3.5 7.17 3.5 7.368 3.516C7.581 3.534 7.814 3.573 8.044 3.691C8.374 3.859 8.642 4.126 8.809 4.456C8.927 4.686 8.966 4.919 8.984 5.132C9 5.33 9 5.566 9 5.824V6.676C9 6.934 9 7.17 8.984 7.368C8.971 7.6027 8.91152 7.83248 8.809 8.044C8.6412 8.3734 8.3734 8.6412 8.044 8.809C7.83252 8.91164 7.60272 8.97113 7.368 8.984C7.17 9 6.934 9 6.676 9H5.824C5.566 9 5.33 9 5.132 8.984C4.8973 8.97103 4.66751 8.91154 4.456 8.809C4.1266 8.6412 3.8588 8.3734 3.691 8.044C3.58848 7.83248 3.529 7.6027 3.516 7.368C3.5 7.17 3.5 6.934 3.5 6.676V5.824C3.5 5.566 3.5 5.33 3.516 5.132C3.52887 4.89728 3.58836 4.66748 3.691 4.456C3.85854 4.12675 4.12597 3.85897 4.455 3.691C4.685 3.573 4.919 3.534 5.132 3.516C5.33 3.5 5.566 3.5 5.824 3.5ZM13.324 11H14.176C14.434 11 14.67 11 14.868 11.016C15.081 11.034 15.314 11.073 15.544 11.191C15.874 11.359 16.142 11.626 16.309 11.956C16.427 12.186 16.466 12.419 16.484 12.632C16.5 12.83 16.5 13.066 16.5 13.324V14.176C16.5 14.434 16.5 14.67 16.484 14.868C16.471 15.1027 16.4115 15.3325 16.309 15.544C16.1412 15.8734 15.8734 16.1412 15.544 16.309C15.3325 16.4116 15.1027 16.4711 14.868 16.484C14.67 16.5 14.434 16.5 14.176 16.5H13.324C13.066 16.5 12.83 16.5 12.632 16.484C12.3973 16.471 12.1675 16.4115 11.956 16.309C11.6266 16.1412 11.3588 15.8734 11.191 15.544C11.0885 15.3325 11.029 15.1027 11.016 14.868C11 14.67 11 14.434 11 14.176V13.324C11 13.066 11 12.83 11.016 12.632C11.0289 12.3973 11.0884 12.1675 11.191 11.956C11.3585 11.6268 11.626 11.359 11.955 11.191C12.185 11.073 12.419 11.034 12.632 11.016C12.83 11 13.066 11 13.324 11ZM6.676 16.5H5.824C5.566 16.5 5.33 16.5 5.132 16.484C4.8973 16.471 4.66752 16.4115 4.456 16.309C4.1266 16.1412 3.8588 15.8734 3.691 15.544C3.58846 15.3325 3.52897 15.1027 3.516 14.868C3.5 14.67 3.5 14.434 3.5 14.176V13.324C3.5 13.066 3.5 12.83 3.516 12.632C3.52887 12.3973 3.58836 12.1675 3.691 11.956C3.8588 11.6266 4.1266 11.3588 4.456 11.191C4.686 11.073 4.919 11.033 5.132 11.016C5.33 11 5.566 11 5.824 11H6.676C6.934 11 7.17 11 7.368 11.016C7.581 11.034 7.814 11.073 8.044 11.191C8.374 11.358 8.641 11.626 8.809 11.955C8.927 12.185 8.966 12.419 8.984 12.632C9 12.83 9 13.066 9 13.324V14.176C9 14.434 9 14.67 8.984 14.868C8.97103 15.1027 8.91154 15.3325 8.809 15.544C8.6412 15.8734 8.3734 16.1412 8.044 16.309C7.83252 16.4116 7.60272 16.4711 7.368 16.484C7.17 16.5 6.934 16.5 6.676 16.5Z" fill="currentColor" />
                      </svg>
                    </button>
                    {/* Zoom out (dots) */}
                    <button
                      onClick={() => setGridView('zoom-out')}
                      className={`p-1.5 rounded transition-colors ${
                      gridView === 'zoom-out' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`
                      }
                      aria-label="Zoom out grid">
                      
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                        <circle cx="10" cy="5" r="1.5" fill="currentColor" />
                        <circle cx="15" cy="5" r="1.5" fill="currentColor" />
                        <circle cx="5" cy="10" r="1.5" fill="currentColor" />
                        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                        <circle cx="15" cy="10" r="1.5" fill="currentColor" />
                        <circle cx="5" cy="15" r="1.5" fill="currentColor" />
                        <circle cx="10" cy="15" r="1.5" fill="currentColor" />
                        <circle cx="15" cy="15" r="1.5" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <ul
                id="ResultsList"
                className={`grid gap-x-4 gap-y-6 ${
                gridView === 'zoom-out' ? 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6' : 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3'}`
                }
                role="list">
                
                {products.map((product) =>
                <li key={product.id} className="relative group">
                    {/* Wishlist Button */}
                    <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-2 right-2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all"
                    aria-label="Add to wishlist">
                    
                      <Image
                      src={wishlist.includes(product.id) ?
                      'https://cdn.shopify.com/s/files/1/0724/0315/7158/files/heart_check.svg' :
                      'https://cdn.shopify.com/s/files/1/0724/0315/7158/files/heart_plus.svg'
                      }
                      alt={wishlist.includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
                      width={20}
                      height={20}
                      unoptimized />
                    
                    </button>

                    {/* Product Image */}
                    <Link href={product.link} target="_blank" rel="noopener noreferrer">
                      <div className="relative overflow-hidden bg-gray-50" style={{ aspectRatio: '4/5' }}>
                        <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        unoptimized />
                      
                        {/* Badges */}
                        {product.soldOut &&
                      <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                            <span className="bg-white text-gray-700 text-xs font-medium px-3 py-1">Sold out</span>
                          </div>
                      }
                        {product.discount &&
                      <div
                        className="absolute top-2 left-2 text-white text-xs font-bold px-2 py-1"
                        style={{ backgroundColor: '#e21a5a', borderRadius: '100px' }}>
                        
                            {product.discount}
                          </div>
                      }
                      </div>
                    </Link>

                    {/* Product Info */}
                    <div className="mt-2">
                      <Link href={product.link} target="_blank" rel="noopener noreferrer">
                        <h3
                        className="text-xs text-gray-800 leading-snug line-clamp-2 hover:text-[#e21a5a] transition-colors"
                        style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                        
                          {product.title}
                        </h3>
                      </Link>
                      <div className="mt-1 flex items-center gap-2 flex-wrap">
                        {product.comparePrice ?
                      <>
                            <span className="text-xs font-semibold text-gray-900" style={{ fontSize: '13px', fontWeight: 600 }}>
                              {product.salePrice}
                            </span>
                            <span className="text-xs text-gray-400 line-through" style={{ fontSize: '13px' }}>
                              {product.comparePrice}
                            </span>
                          </> :

                      <span className="text-gray-900" style={{ fontSize: '13px', fontWeight: 600 }}>
                            {product.price}
                          </span>
                      }
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="bg-white border-t border-gray-100 py-10">
          <div className="max-w-[1400px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Popular Categories */}
              <div>
                <h2 className="text-sm font-bold text-gray-800 mb-3">
                  <strong>Popular Categories</strong>
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {[
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
                  { label: 'Baby Toys', href: 'https://www.popees.com/collections/toys-gaming-baby-care' }].
                  map((cat, i, arr) =>
                  <span key={cat.label}>
                      <Link href={cat.href} className="hover:text-[#e21a5a] transition-colors">{cat.label}</Link>
                      {i < arr.length - 1 && <span className="mx-1 text-gray-400">|</span>}
                    </span>
                  )}
                </p>
              </div>

              {/* SEO Text */}
              <div className="text-sm text-gray-600 leading-relaxed space-y-3">
                <h4 className="font-bold text-gray-800"><strong>Shop 0–1 Month Baby Clothes Online</strong></h4>
                <p>
                  Welcome your newborn with Popees&apos; specially designed{' '}
                  <strong>0–1 Month Baby Clothing Collection</strong>, thoughtfully created for your baby&apos;s first weeks of life.
                  Our collection features premium cotton jhablas, bodysuits, rompers, sleepsuits, tops, pants, mittens, caps, nappies,
                  and other newborn essentials designed to keep your little one comfortable every day.
                </p>
                <h4 className="font-bold text-gray-800"><strong>Frequently Asked Questions</strong></h4>
                <div className="space-y-2">
                  <p><strong>1. What clothes does a newborn baby need in the first month?</strong></p>
                  <p>During the first month, your baby will need soft essentials such as bodysuits, sleepsuits, rompers, mittens, caps, socks, and comfortable cotton outfits.</p>
                  <p><strong>2. Is cotton clothing best for babies aged 0–1 month?</strong></p>
                  <p>Yes. Cotton is one of the best fabrics for newborns because it is soft, breathable, gentle on delicate skin, and helps reduce irritation.</p>
                  <p><strong>3. How many outfits does a 0–1 month baby need?</strong></p>
                  <p>Most parents find that having 6–10 everyday outfits is practical, as newborns often need multiple clothing changes each day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>);

}