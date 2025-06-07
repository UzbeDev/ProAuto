import React from 'react'
import "./Uslugi.css"
import uslugiPerson from "./../../img/uslugi-person.png"
import uslugiCardImg1 from "./../../img/uslugi-card-img1.svg"
import uslugiCardImg2 from "./../../img/uslugi-card-img2.svg"
import uslugiCardImg3 from "./../../img/uslugi-card-img3.svg"
import uslugiIconBack from "./../../img/uslugi-icon-back.svg"
export default function Uslugi() {
    return (
        <section className='uslugi-section'>
            <p className='uslugi-title'>услуги</p>
            <div className="red-line"></div>
            <div className="uslugi-desc">Менеджеры компании с радостью ответят на ваши вопросы и помогут с<br />выбором продукции.</div>
            <div className="container">

                <div className="main-side">
                    <div className="uslugi-cards">
                        <div className="uslugi-card">
                            <img src={uslugiIconBack} alt="uslugiIconBack" className='uslugiIconBack' />
                            <img src={uslugiCardImg1} alt="uslugiCardImg1" className='uslugi-card__img' />
                            <div className="uslugi-card__text">
                                <p className="uslugi-card__title">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</p>
                                <p className="uslugi-card__desc">Поможем с выбором аккумулятора,<br />моторного масла и аксессуаров для<br />автомобиля под ваши требования. </p>
                            </div>
                        </div>
                        <div className="uslugi-card">
                            <img src={uslugiIconBack} alt="uslugiIconBack" className='uslugiIconBack' />
                            <img src={uslugiCardImg2} alt="uslugiCardImg1" className='uslugi-card__img' />
                            <div className="uslugi-card__text">
                                <p className="uslugi-card__title">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</p>
                                <p className="uslugi-card__desc">Поможем с выбором аккумулятора,<br />моторного масла и аксессуаров для<br />автомобиля под ваши требования. </p>
                            </div>
                        </div>
                        <div className="uslugi-card">
                            <img src={uslugiIconBack} alt="uslugiIconBack" className='uslugiIconBack' />
                            <img src={uslugiCardImg3} alt="uslugiCardImg1" className='uslugi-card__img' />
                            <div className="uslugi-card__text">
                                <p className="uslugi-card__title">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА</p>
                                <p className="uslugi-card__desc">Поможем с выбором аккумулятора,<br />моторного масла и аксессуаров для<br />автомобиля под ваши требования. </p>
                            </div>
                        </div>
                    </div>
                    <div className="uslugi-img">
                        <img src={uslugiPerson} alt="" />
                    </div>
                </div>
                <button className='redline-button'>ЗАДАТЬ ВОПРОС</button>
            </div>
            <div className="clearfix"></div>
        </section>
    )
}
