'use client'

import { Search, Bell, MapPin, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const sampleCars = [
  { id: 1, title: 'Toyota HILUX Revo', category: 'SUV', daily_rate: 10500, rating: 4.9, reviews: 100, image: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=500&q=80' },
  { id: 2, title: 'TOYOTA Corolla Altis', category: 'Sedan', daily_rate: 7500, rating: 4.8, reviews: 100, image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500&q=80' },
  { id: 3, title: 'TOYOTA Corolla Gli', category: 'Sedan', daily_rate: 6000, rating: 4.9, reviews: 100, image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=500&q=80' },
  { id: 4, title: 'TOYOTA Yaris', category: 'Sedan', daily_rate: 6000, rating: 5.0, reviews: 100, image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&q=80' },
  { id: 5, title: 'Toyota Land Cruiser 300', category: 'Premium', daily_rate: 30000, rating: 4.8, reviews: 120, image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&q=80' },
  { id: 6, title: 'Honda Civic', category: 'Sedan', daily_rate: 6500, rating: 4.9, reviews: 100, image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80' },
]

const categories = [
  { name: 'All Cars', count: 571 },
  { name: 'SUV', count: 271 },
  { name: 'Sedan', count: 200 },
  { name: 'Premium', count: 100 },
]

const FALLBACK = 'https://images.unsplash.com/photo-1493238792000-8113da705763?w=500&q=80'

function CarCard({ car }) {
  return (
    <Link href={`/cars/${car.id}`} style={{ textDecoration: 'none' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '14px',
        border: '1px solid #EBEBEB',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        transition: 'transform 0.15s',
      }}>
        {/* Image container — fixed aspect ratio */}
        <div style={{
          width: '100%',
          aspectRatio: '16/10',
          overflow: 'hidden',
          backgroundColor: '#F0F0F0',
        }}>
          <img
            src={car.image}
            alt={car.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
            onError={e => { e.target.src = FALLBACK }}
          />
        </div>

        {/* Card info */}
        <div style={{ padding: '10px 12px 12px 12px' }}>
          {/* Star rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '5px' }}>
            <span style={{ color: '#F59E0B', fontSize: '12px' }}>★</span>
            <span style={{ color: '#888', fontSize: '11px' }}>
              {car.rating} ({car.reviews}+ Review)
            </span>
          </div>
          {/* Car name */}
          <p style={{
            color: '#1A1A1A',
            fontSize: '13px',
            fontWeight: '600',
            margin: '0 0 5px 0',
            lineHeight: '1.3',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            {car.title}
          </p>
          {/* Price */}
          <p style={{
            color: '#0D2318',
            fontSize: '13px',
            fontWeight: '700',
            margin: 0,
          }}>
            Rs {car.daily_rate.toLocaleString()}
            <span style={{ fontWeight: '400', color: '#888', fontSize: '11px' }}>
              {' '}/ 1 day
            </span>
          </p>
        </div>
      </div>
    </Link>
  )
}
export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All Cars')

  const filteredCars = activeCategory === 'All Cars'
    ? sampleCars
    : sampleCars.filter(car => car.category === activeCategory)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F5F5F5', fontFamily: 'Inter, sans-serif' }}>

      {/* Dark Green Header */}
      <div style={{ backgroundColor: '#0D2318', padding: '48px 20px 20px 20px' }}>

        {/* Top Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h1 style={{ color: 'white', fontSize: '24px', fontWeight: '800', margin: 0 }}>Hi, Touseef! 👋</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
              <MapPin size={13} color="rgba(255,255,255,0.7)" />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px' }}>Karachi, Pakistan</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', padding: '8px', cursor: 'pointer', display: 'flex' }}>
              <Bell size={20} color="white" />
            </button>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#B8941E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontWeight: '700', fontSize: '16px' }}>T</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <Search size={18} color="#888" />
          <input type="text" placeholder="Search car..." style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px', fontFamily: 'Inter, sans-serif' }} />
        </div>

        {/* Category Chips */}
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px' }}>
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              style={{ flexShrink: 0, padding: '8px 16px', borderRadius: '12px', border: 'none', cursor: 'pointer', backgroundColor: activeCategory === cat.name ? 'white' : 'rgba(255,255,255,0.2)', color: activeCategory === cat.name ? '#0D2318' : 'white', fontWeight: activeCategory === cat.name ? '700' : '500', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}
            >
              <div>{cat.name}</div>
              <div style={{ fontSize: '11px', opacity: 0.7 }}>{cat.count} cars</div>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px' }}>

        {/* Find Closest Car Banner */}
        <div style={{ backgroundColor: '#0D2318', borderRadius: '14px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', cursor: 'pointer' }}>
          <div style={{ width: '44px', height: '44px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <MapPin size={22} color="white" />
          </div>
          <p style={{ color: 'white', fontSize: '14px', fontWeight: '600', flex: 1, margin: 0 }}>Find the closest car to your location</p>
          <div style={{ width: '30px', height: '30px', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronRight size={16} color="white" />
          </div>
        </div>

        {/* Available Cars */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>Available cars</h2>
          <button style={{ color: '#0D2318', fontSize: '13px', fontWeight: '500', background: 'none', border: 'none', cursor: 'pointer' }}>See more</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
          {filteredCars.map(car => <CarCard key={car.id} car={car} />)}
        </div>

        {/* Recent Cars */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>Recent cars</h2>
          <button style={{ color: '#0D2318', fontSize: '13px', fontWeight: '500', background: 'none', border: 'none', cursor: 'pointer' }}>See more</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {sampleCars.slice(0, 4).map(car => <CarCard key={`r-${car.id}`} car={car} />)}
        </div>

      </div>

      {/* Bottom padding */}
      <div style={{ height: '80px' }}></div>

      {/* Bottom Nav */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#0D2318', padding: '12px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <Link href="/home" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
            <div style={{ width: '24px', height: '24px', backgroundColor: 'white', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0D2318"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            </div>
            <span style={{ color: 'white', fontSize: '11px', fontWeight: '600' }}>Home</span>
          </Link>
          <Link href="/home" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>Favorites</span>
          </Link>
          <Link href="/trips" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>Trips</span>
          </Link>
          <Link href="/profile" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>Profile</span>
          </Link>
        </div>
      </div>

    </div>
  )
}