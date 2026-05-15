'use client'

import { Search, Bell, MapPin, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

// Sample car data — we will replace this with real Supabase data later
const sampleCars = [
  {
    id: 1,
    title: 'Toyota HILUX Revo',
    category: 'SUV',
    daily_rate: 10500,
    rating: 4.9,
    reviews: 100,
    image: null,
  },
  {
    id: 2,
    title: 'TOYOTA Corolla Altis',
    category: 'Sedan',
    daily_rate: 7500,
    rating: 4.8,
    reviews: 100,
    image: null,
  },
  {
    id: 3,
    title: 'TOYOTA Corolla Gli',
    category: 'Sedan',
    daily_rate: 6000,
    rating: 4.9,
    reviews: 100,
    image: null,
  },
  {
    id: 4,
    title: 'TOYOTA Yaris',
    category: 'Sedan',
    daily_rate: 6000,
    rating: 5.0,
    reviews: 100,
    image: null,
  },
  {
    id: 5,
    title: 'Toyota Land Cruiser 300',
    category: 'Premium',
    daily_rate: 30000,
    rating: 4.8,
    reviews: 120,
    image: null,
  },
  {
    id: 6,
    title: 'Honda Civic',
    category: 'Sedan',
    daily_rate: 6500,
    rating: 4.9,
    reviews: 100,
    image: null,
  },
]

const categories = [
  { name: 'All Cars', count: 571 },
  { name: 'SUV',      count: 271 },
  { name: 'Sedan',    count: 200 },
  { name: 'Premium',  count: 100 },
]

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All Cars')

  const filteredCars = activeCategory === 'All Cars'
    ? sampleCars
    : sampleCars.filter(car => car.category === activeCategory)

  return (
    <div className="min-h-screen bg-vv-cream">

      {/* ── Dark Green Header ── */}
      <div className="bg-vv-green px-5 pt-12 pb-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-white text-2xl font-bold">
              Hi, Touseef! 👋
            </h1>
            <div className="flex items-center gap-1 mt-1">
              <MapPin size={13} color="rgba(255,255,255,0.7)" />
              <span className="text-white/70 text-sm">
                Karachi, Pakistan
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full bg-white/10">
              <Bell size={20} color="white" />
            </button>
            <div className="w-10 h-10 rounded-full bg-vv-gold flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl px-4 py-3 flex items-center gap-3">
          <Search size={18} color="#888" />
          <input
            type="text"
            placeholder="Search car..."
            className="flex-1 outline-none text-vv-text text-sm bg-transparent"
          />
          <button className="p-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6"/>
              <line x1="4" y1="12" x2="20" y2="12"/>
              <line x1="4" y1="18" x2="20" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Category Chips */}
        <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat.name
                  ? 'bg-white text-vv-green font-bold'
                  : 'bg-white/20 text-white'
              }`}
            >
              <div>{cat.name}</div>
              <div className={`text-xs ${
                activeCategory === cat.name
                  ? 'text-vv-text-light'
                  : 'text-white/60'
              }`}>
                {cat.count} cars
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── White Content Area ── */}
      <div className="px-5 py-5">

        {/* Find Closest Car Banner */}
        <Link href="/home">
          <div className="bg-vv-green rounded-xl px-4 py-3 flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin size={22} color="white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">
                Find the closest car to your location
              </p>
            </div>
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <ChevronRight size={16} color="white" />
            </div>
          </div>
        </Link>

        {/* Available Cars Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-vv-text text-lg font-bold">Available cars</h2>
          <button className="text-vv-green text-sm font-medium">See more</button>
        </div>

        {/* Car Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {filteredCars.map(car => (
            <Link key={car.id} href={`/cars/${car.id}`}>
              <div className="bg-white rounded-vv border border-gray-100 overflow-hidden">
                {/* Car Image */}
                <div className="bg-vv-grey h-28 flex items-center justify-center">
                  <span className="text-3xl">🚗</span>
                </div>
                {/* Car Info */}
                <div className="p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-vv-text-light text-xs">
                      {car.rating} ({car.reviews}+ Review)
                    </span>
                  </div>
                  <p className="text-vv-text text-sm font-semibold leading-tight mb-1">
                    {car.title}
                  </p>
                  <p className="text-vv-green text-sm font-bold">
                    Rs {car.daily_rate.toLocaleString()} / 1 day
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Cars Section */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-vv-text text-lg font-bold">Recent cars</h2>
          <button className="text-vv-green text-sm font-medium">See more</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {sampleCars.slice(0, 4).map(car => (
            <Link key={car.id} href={`/cars/${car.id}`}>
              <div className="bg-white rounded-vv border border-gray-100 overflow-hidden">
                <div className="bg-vv-grey h-28 flex items-center justify-center">
                  <span className="text-3xl">🚗</span>
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-vv-text-light text-xs">
                      {car.rating} ({car.reviews}+ Review)
                    </span>
                  </div>
                  <p className="text-vv-text text-sm font-semibold leading-tight mb-1">
                    {car.title}
                  </p>
                  <p className="text-vv-green text-sm font-bold">
                    Rs {car.daily_rate.toLocaleString()} / 1 day
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

      {/* ── Bottom Navigation ── */}
      <div className="fixed bottom-0 left-0 right-0 bg-vv-green">
        <div className="flex items-center justify-around py-3 px-4">
          <Link href="/home" className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0D2318">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              </svg>
            </div>
            <span className="text-white text-xs font-medium">Home</span>
          </Link>
          <Link href="/home" className="flex flex-col items-center gap-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span className="text-white/60 text-xs">Favorites</span>
          </Link>
          <Link href="/trips" className="flex flex-col items-center gap-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
              <rect x="1" y="3" width="15" height="13"/>
              <path d="M16 8h4l3 3v5h-7V8z"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
            <span className="text-white/60 text-xs">Trips</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span className="text-white/60 text-xs">Profile</span>
          </Link>
        </div>
      </div>

      {/* Bottom padding so content is not hidden behind nav */}
      <div className="h-20"></div>

    </div>
  )
}