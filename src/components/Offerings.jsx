import React, { useState } from 'react'
import { Store, Building2, Megaphone, Layers, Shield, Globe, CheckCircle } from 'lucide-react'

const offeringsData = {
  Outlets: [
    {
      title: 'Centralized Screen Control',
      desc: 'Manage thousands of screens with schedules, playlists, and zones.',
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: 'Brand‑safe Campaigns',
      desc: 'Lock branding, approve content, and maintain compliance everywhere.',
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: 'Multi‑site Visibility',
      desc: 'Live status, health checks, and reporting across locations.',
      icon: <Globe className="h-5 w-5" />,
    },
  ],
  'Ad Company': [
    {
      title: 'Ad Inventory Management',
      desc: 'Organize placements, dayparts, and packages with precision.',
      icon: <Megaphone className="h-5 w-5" />,
    },
    {
      title: 'Programmatic Ready',
      desc: 'APIs and data layers prepared for automated buying and reporting.',
      icon: <Layers className="h-5 w-5" />,
    },
    {
      title: 'Proof of Play',
      desc: 'Automatic playback logs and analytics for every slot.',
      icon: <CheckCircle className="h-5 w-5" />,
    },
  ],
}

export default function Offerings() {
  const [active, setActive] = useState('Outlets')
  const list = offeringsData[active]

  return (
    <section id="offerings" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Do</h2>
          <p className="mt-2 max-w-xl text-gray-600">
            Tools tailored to where you operate — switch the view to see how we help.
          </p>
        </div>
        <div className="inline-flex rounded-full bg-gray-100 p-1">
          {['Outlets', 'Ad Company'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                active === tab ? 'bg-white text-gray-900 shadow' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'Outlets' ? <Store className="h-4 w-4" /> : <Building2 className="h-4 w-4" />}
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((item, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/60 p-6 shadow-sm backdrop-blur-md transition hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-blue-200/40 to-purple-200/40 opacity-0 blur-2xl transition group-hover:opacity-100" />
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <a
          href="#contact"
          className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 shadow-sm transition hover:bg-gray-50"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
