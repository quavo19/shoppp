import React from 'react'
import Welcome from './Welcome'
import Comtest from './Comtest';
import Contact from '../Parts/contact/Contact';
import FeaturedProducts from './FeaturedProducts';
import Footer from '../Footer';

export default function HomePage() {
  return (
    <>
        <Welcome />
        <FeaturedProducts />
        <Comtest />
        <Contact />
        <Footer />
    </>
  )
}
