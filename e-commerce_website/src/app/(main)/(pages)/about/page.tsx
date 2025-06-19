import React from 'react'
import AboutHero from './sections/Hero'
import Header from '@/app/components/layout/Header'

const AboutPage = () => {
  return (
    <>
    <Header headerColor={["black", "white"]} />
    <AboutHero/>
    </>
  )
}

export default AboutPage