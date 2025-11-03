import React from 'react'
import Hero from './components/Hero'
import Offerings from './components/Offerings'
import Ecosystem from './components/Ecosystem'
import ContactCTA from './components/ContactCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <Offerings />
      <Ecosystem />
      <ContactCTA />
    </div>
  )
}

export default App
