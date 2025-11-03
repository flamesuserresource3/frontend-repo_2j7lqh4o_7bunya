import React from 'react'
import Spline from '@splinetool/react-spline'
import { Rocket, Play, Shield, Monitor, Megaphone } from 'lucide-react'

const Marquee = () => {
  const items = [
    { icon: <Megaphone className="h-4 w-4" />, text: 'Dynamic Digital Signage' },
    { icon: <Monitor className="h-4 w-4" />, text: 'Real‑time Screen Control' },
    { icon: <Shield className="h-4 w-4" />, text: 'Enterprise‑grade Security' },
  ]
  return (
    <div className="overflow-hidden">
      <div className="flex gap-6 animate-[marquee_18s_linear_infinite] whitespace-nowrap">
        {items.concat(items).concat(items).map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm text-white backdrop-blur-md"
          >
            {item.icon}
            {item.text}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Subtle gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.18),transparent_40%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/30 px-4 py-2 backdrop-blur-md">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Rocket className="h-3.5 w-3.5" />
          </span>
          <span className="text-sm font-medium text-gray-800">Modern Digital Signage Platform</span>
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Elevate Your Screens. Orchestrate Your Ads.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          From retail chains to ad networks — manage, schedule, and analyze campaigns across every screen with a glassy, modern toolkit.
        </p>

        <div className="mt-8 w-full max-w-3xl">
          <Marquee />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:bg-gray-800"
          >
            Get a Demo
            <Play className="h-4 w-4" />
          </a>
          <a
            href="#offerings"
            className="inline-flex items-center gap-2 rounded-full border border-gray-900/10 bg-white/80 px-6 py-3 text-gray-900 backdrop-blur-md transition hover:bg-white"
          >
            Explore Capabilities
          </a>
        </div>
      </div>
    </section>
  )
}
