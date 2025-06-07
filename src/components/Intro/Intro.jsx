import React from 'react'
import "./Intro.css"
import adIcon1 from "./../../img/ad-icon1.svg"
import adIcon2 from "./../../img/ad-icon2.svg"
import adIcon3 from "./../../img/ad-icon3.svg"
import adIcon4 from "./../../img/ad-icon4.svg"
export default function Intro() {
  return (
    <section className='intro-section'>

      <div className="intro-items">
        <div className="container">
          <p className='intro-title'>НАДЕЖНЫЕ,<br />КАЧЕСТВЕННЫЕ<br />АККУМУЛЯТОРЫ</p>
          <button type="button" className='redline-button'>ПЕРЕЙТИ В КАТАЛОГ</button>
        </div>
      </div>
      <div className="info-cards">
        <div className="container">
          <div className="cards">

            <div className="card">
              <img className='card-icon' src={adIcon1} alt="Icon" />
              <p>Наличный и безналичный<br />расчет</p>
            </div>
            <div className="card">
              <img className='card-icon' src={adIcon2} alt="Icon" />
              <p>Наличный и безналичный<br />расчет</p>
            </div>
            <div className="card">
              <img className='card-icon' src={adIcon3} alt="Icon" />
              <p>Наличный и безналичный<br />расчет</p>
            </div>
            <div className="card">
              <img className='card-icon' src={adIcon4} alt="Icon" />
              <p>Наличный и безналичный<br />расчет</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
