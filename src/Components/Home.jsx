import React from 'react'
import Header from './Header'
import Slider from './Slider'
import About from './About'
import Services from './Services'
import Resume from './Resume'  
import Portfolio from './Portfolio'
import Skills from './Skills'
import Reviews from './Reviews'    
import Contact from './Contact'
import Blog from './Blog'
import Footer from './Footer'
import FooterCursor from './FooterCursor'


export default function Home() {
  return (
    <>
      <Header />
      <Slider />  
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Skills />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
      <FooterCursor />
      
    </>
    
  )
}
