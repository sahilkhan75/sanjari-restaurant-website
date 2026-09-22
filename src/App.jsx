import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhyChooseUs from './components/WhyChooseUs'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Rooms from './components/Rooms'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <WhyChooseUs />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />

    </>
  )
}
