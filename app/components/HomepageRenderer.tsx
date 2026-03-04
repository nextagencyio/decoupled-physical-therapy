'use client'

import Link from 'next/link'
import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Activity, Hand, HeartPulse, ShieldCheck, Timer, Users } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const serviceCards = [
  { icon: Activity, title: 'Injury Recovery', description: 'Structured therapy plans focused on safe, progressive return to function.' },
  { icon: Hand, title: 'Manual Therapy', description: 'Hands-on techniques to reduce pain, improve mobility, and restore movement.' },
  { icon: HeartPulse, title: 'Performance Rehab', description: 'Strength and conditioning support for sport and active lifestyle demands.' },
]

const advantageCards = [
  { icon: ShieldCheck, title: 'Evidence-Based Care', description: 'Each treatment plan is grounded in current clinical best practices.' },
  { icon: Timer, title: 'Focused Sessions', description: 'One-on-one attention and clear weekly progression benchmarks.' },
  { icon: Users, title: 'Collaborative Team', description: 'Therapists coordinate with your providers for complete continuity of care.' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 uppercase tracking-tight mb-4">Treatment Programs</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Personalized plans that support recovery, resilience, and long-term movement health.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="h-1 bg-gradient-to-r from-primary-500 to-accent-400" />
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-gray-900 uppercase tracking-wide mb-3">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gray-100" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-900 uppercase tracking-tight mb-4">Why Summit PT</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Compassionate clinicians, measurable progress, and patient-first treatment design.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantageCards.map((card) => {
              const Icon = card.icon
              return (
                <div key={card.title} className="text-center p-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 uppercase tracking-wide mb-2">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{card.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      <div className="relative">
        <svg className="absolute -top-px w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: '60px' }}>
          <path d="M0,0 C480,60 960,60 1440,0 L1440,60 L0,60 Z" className="fill-primary-950" />
        </svg>
        <footer className="bg-primary-950 text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="font-display text-2xl font-bold text-accent-400 uppercase tracking-wider mb-4">Summit Physical Therapy</h3>
                <p className="text-gray-400 mb-6 max-w-md leading-relaxed">Hands-on physical therapy that helps patients move with confidence and less pain.</p>
              </div>
              <div>
                <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
                <ul className="space-y-3 text-gray-400">
                  <li><Link href="/services" className="hover:text-accent-400 transition-colors">Services</Link></li>
                  <li><Link href="/team" className="hover:text-accent-400 transition-colors">Therapists</Link></li>
                  <li><Link href="/conditions" className="hover:text-accent-400 transition-colors">Conditions</Link></li>
                  <li><Link href="/about" className="hover:text-accent-400 transition-colors">About</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-display font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
                <ul className="space-y-3 text-gray-400">
                  <li>820 Summit Ridge Drive</li>
                  <li>Suite 200</li>
                  <li>info@summitpt.com</li>
                  <li>(555) 478-2100</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-primary-800 mt-12 pt-8 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Summit Physical Therapy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
