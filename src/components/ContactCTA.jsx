import React, { useState } from 'react'
import { Rocket, Users, MapPin, Building2 } from 'lucide-react'

export default function ContactCTA() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
    location: '',
    message: '',
  })

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    // For now, just show a quick confirmation
    alert('Thanks! We\'ll be in touch shortly.')
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(17,24,39,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            <Rocket className="h-3.5 w-3.5" /> Ready to Transform Your Ad Management?
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let’s build your screen network</h2>
          <p className="mt-2 text-gray-600">Share a few details and our team will schedule a tailored walkthrough.</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur-md shadow-sm"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-offset-0 focus:border-gray-400 focus:ring-0"
                  placeholder="Alex Johnson"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Work Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-offset-0 focus:border-gray-400 focus:ring-0"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Company Name</label>
                <div className="relative">
                  <Building2 className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    name="company"
                    value={form.company}
                    onChange={onChange}
                    className="w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm outline-none ring-offset-0 focus:border-gray-400 focus:ring-0"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Employee Size</label>
                <select
                  name="size"
                  value={form.size}
                  onChange={onChange}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-offset-0 focus:border-gray-400 focus:ring-0"
                >
                  <option value="">Select</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201-1000</option>
                  <option>1000+</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">Location</label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input
                    name="location"
                    value={form.location}
                    onChange={onChange}
                    className="w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm outline-none ring-offset-0 focus:border-gray-400 focus:ring-0"
                    placeholder="City, Country"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-gray-700">How can we help?</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-offset-0 focus:border-gray-400 focus:ring-0"
                  placeholder="Tell us about your screens, goals, and timelines..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Request Demo
            </button>
          </form>

          <div className="flex flex-col justify-center rounded-2xl border border-gray-200 bg-white/70 p-6 text-center backdrop-blur-md">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-white">
              <Users className="h-3.5 w-3.5" />
              Trusted by growing retailers & ad networks
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Why teams choose us</h3>
            <ul className="mt-3 space-y-2 text-left text-sm text-gray-600">
              <li>• Clean, reliable playback across devices</li>
              <li>• Approvals, roles, and audit‑ready logs</li>
              <li>• Built for scale with simple controls</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
