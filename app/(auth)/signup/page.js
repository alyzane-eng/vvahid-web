'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, Mail, Lock } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSignup() {
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      // Success — go to verify email page
      window.location.href = '/verify-email'
    }
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'Inter, sans-serif' }}>

      {/* Scrollable content */}
      <div style={{ maxWidth: '480px', margin: '0 auto', padding: '40px 24px 40px 24px' }}>

        {/* Title */}
        <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1A1A1A', margin: '0 0 4px 0' }}>
          Sign Up
        </h1>
        <p style={{ fontSize: '15px', color: '#888', margin: '0 0 24px 0' }}>
          Create your new account
        </p>

        {/* Car Image */}
        <div style={{ borderRadius: '16px', height: '200px', overflow: 'hidden', marginBottom: '28px' }}>
          <img
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80"
            alt="Premium car"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Error message */}
        {error && (
          <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px', color: '#DC2626', fontSize: '13px' }}>
            {error}
          </div>
        )}

        {/* Email Field */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ fontSize: '14px', fontWeight: '500', color: '#1A1A1A', display: 'block', marginBottom: '8px' }}>
            Email
          </label>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F0F0F0', borderRadius: '12px', padding: '14px 16px', gap: '10px', border: '1.5px solid transparent', outline: 'none' }}>
            <Mail size={18} color="#888" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ flex: 1, border: 'none', outline: 'none', backgroundColor: 'transparent', fontSize: '15px', fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}
            />
          </div>
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ fontSize: '14px', fontWeight: '500', color: '#1A1A1A', display: 'block', marginBottom: '8px' }}>
            Password
          </label>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F0F0F0', borderRadius: '12px', padding: '14px 16px', gap: '10px' }}>
            <Lock size={18} color="#888" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ flex: 1, border: 'none', outline: 'none', backgroundColor: 'transparent', fontSize: '15px', fontFamily: 'Inter, sans-serif', color: '#1A1A1A' }}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex' }}
            >
              {showPassword
                ? <Eye size={18} color="#888" />
                : <EyeOff size={18} color="#888" />
              }
            </button>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSignup}
          disabled={loading}
          style={{ width: '100%', padding: '16px', backgroundColor: loading ? '#888' : '#0D2318', color: 'white', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'Inter, sans-serif', marginBottom: '20px' }}
        >
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>

        {/* Sign In Link */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '24px' }}>
          <span style={{ fontSize: '14px', color: '#888' }}>or sign up with</span>
          <Link href="/login">
            <div style={{ backgroundColor: '#0D2318', color: 'white', padding: '8px 18px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
              Sign In →
            </div>
          </Link>
        </div>

        {/* Social Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}>
          {/* Google */}
          <button style={{ padding: '14px', backgroundColor: 'white', border: '1px solid #E5E5E5', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </button>
          {/* Apple */}
          <button style={{ padding: '14px', backgroundColor: 'white', border: '1px solid #E5E5E5', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="black">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </button>
          {/* Facebook */}
          <button style={{ padding: '14px', backgroundColor: 'white', border: '1px solid #E5E5E5', borderRadius: '12px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </button>
        </div>

        {/* Terms */}
        <p style={{ textAlign: 'center', fontSize: '12px', color: '#888', lineHeight: '1.5' }}>
          By selecting Sign Up, I agree to{' '}
          <span style={{ fontWeight: '700', color: '#1A1A1A' }}>Terms of Service</span>
          {' '}and{' '}
          <span style={{ fontWeight: '700', color: '#1A1A1A' }}>Privacy Policy</span>
        </p>

      </div>
    </div>
  )
}