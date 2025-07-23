import React from 'react'
import { useEffect } from 'react';
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import About from '../Components/About'
import Services from '../Components/Services'
import Resume from '../Components/Resume'  
import Portfolio from '../Components/Portfolio'
import Skills from '../Components/Skills'
//import Reviews from '../Components/Reviews'    
import Contact from '../Components/Contact'
import Blog from '../Components/Blog'
import Footer from '../Components/Footer'
import FooterCursor from '../Components/FooterCursor'
import useMetaTagsHooks from '../Hooks/useMetaTagsHooks';
import Counters from '../Components/Counters';



export default function Home() {
  useMetaTagsHooks({
    title: "Manish Jangir - Personal Portfolio",
    description: "Portfolio showcasing Manish Jangir’s skills and projects.",
    keywords: "portfolio, resume, react developer, frontend, Manish Jangir"
  });


  return (
    <>
      <Header />
      <Slider />  
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Counters />
      <Skills />
     
      {/* <Reviews /> */}
      <Blog />
      <Contact />
      <Footer />
      <FooterCursor />
    </>
  )
}
