import React from 'react'
import { Layers, Megaphone, Shield, Globe, Cpu, Tv, Cast, Smartphone } from 'lucide-react'

const solutions = [
  { title: 'Content & Scheduling', desc: 'Playlists, dayparts, zones, and templating for consistent rollouts.', icon: <Layers className="h-5 w-5" /> },
  { title: 'Ad Ops & Monetization', desc: 'Inventory, placements, Proof‑of‑Play, and campaign pacing.', icon: <Megaphone className="h-5 w-5" /> },
  { title: 'Security & Governance', desc: 'Role‑based access, approvals, and device health monitoring.', icon: <Shield className="h-5 w-5" /> },
  { title: 'Analytics & Insights', desc: 'Device status, playback logs, and custom reporting APIs.', icon: <Globe className="h-5 w-5" /> },
]

const devices = [
  { name: 'Android TV', icon: <Tv className="h-5 w-5" /> },
  { name: 'Amazon Fire TV Stick', icon: <Cast className="h-5 w-5" /> },
  { name: 'Chromecast', icon: <Cpu className="h-5 w-5" /> },
  { name: 'Android Boxes', icon: <Smartphone className="h-5 w-5" /> },
]

export default function Ecosystem() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Complete Ad Ecosystem</h2>
          <p className="mt-2 text-gray-600">
            Everything you need to run a modern digital signage network — designed for clarity and scale.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white/70 p-5 backdrop-blur-md shadow-sm"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                {s.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-2xl font-semibold text-gray-900">Supported Devices</h3>
            <p className="mt-2 text-gray-600">Run on hardware you already trust — no proprietary lock‑in.</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {devices.map((d, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm text-gray-800 backdrop-blur-md"
              >
                <span className="text-gray-900">{d.icon}</span>
                {d.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
