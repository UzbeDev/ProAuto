import React from 'react'
import Nav from './components/Nav/Nav'
import Intro from './components/Intro/Intro'
import Avtovar from './components/Avtovar/Avtovar'
import Uslugi from './components/Uslugi/Uslugi'
import CompanyInfo from './components/CompanyInfo/CompanyInfo'
import News from './components/News/News'
import Footer from './components/Footer/Footer'
export default function App() {
  return (
    <>
      <Nav />
      <Intro />
      <Avtovar />
      <Uslugi />
      <CompanyInfo />
      <News />
      <Footer />
    </>
  )
}
