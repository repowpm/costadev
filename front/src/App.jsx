import React from 'react'
import { Toaster } from 'react-hot-toast'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Technologies from './components/Technologies';
import Stats from './components/Stats';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-black min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Portfolio />
        <Technologies />
        <Stats />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
