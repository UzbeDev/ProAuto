import React from 'react'
import "./Footer.css"
import logo from "./../../img/logo.svg"
import gmail from "./../../img/Gmail.svg"
import phone from "./../../img/Phone.svg"
export default function Footer() {
    return (
        <section className='footer-section'>
            <div className="container">
                <div className="footer-items">
                    <div className="first">
                        <img src={logo} alt="logo" />
                        <p>© 2019 PRO Auto.<br />
                            Все права защищены.</p>
                    </div>
                    <div className="middle">
                        <div className="footer-paths">
                            <div className="footer-path">
                                <p className="path-title">КОМПАНИЯ</p>
                                <p className="path-items">О КОМПАНИИ</p>
                                <p className="path-items">ЛИЦЕНЗИИ</p>
                                <p className="path-items">ПАРТНЕРЫ</p>
                                <p className="path-items">ОТЗЫВЫ КЛИЕНТОВ</p>
                                <p className="path-items">РЕКВИЗИТЫ</p>
                                <p className="path-items">ВАКАНСИИ</p>
                            </div>
                            <div className="footer-path">
                                <p className="path-title">КОМПАНИЯ</p>
                                <p className="path-items">О КОМПАНИИ</p>
                                <p className="path-items">ЛИЦЕНЗИИ</p>
                                <p className="path-items">ПАРТНЕРЫ</p>
                                <p className="path-items">ОТЗЫВЫ КЛИЕНТОВ</p>
                                <p className="path-items">РЕКВИЗИТЫ</p>
                                <p className="path-items">ВАКАНСИИ</p>
                            </div>
                            <div className="footer-path">
                                <p className="path-title">КОМПАНИЯ</p>
                                <p className="path-items">О КОМПАНИИ</p>
                                <p className="path-items">ЛИЦЕНЗИИ</p>
                                <p className="path-items">ПАРТНЕРЫ</p>
                                <p className="path-items">ОТЗЫВЫ КЛИЕНТОВ</p>
                                <p className="path-items">РЕКВИЗИТЫ</p>
                                <p className="path-items">ВАКАНСИИ</p>
                            </div>
                            <div className="footer-path">
                                <p className="path-title">КОМПАНИЯ</p>
                                <p className="path-items">О КОМПАНИИ</p>
                                <p className="path-items">ЛИЦЕНЗИИ</p>
                                <p className="path-items">ПАРТНЕРЫ</p>
                                <p className="path-items">ОТЗЫВЫ КЛИЕНТОВ</p>
                                <p className="path-items">РЕКВИЗИТЫ</p>
                                <p className="path-items">ВАКАНСИИ</p>
                            </div>
                        </div>
                    </div>
                    <div className="last">
                        <div className="text"><img src={phone} alt="phone" className='phone' /><p className='phone-number'>+7 (342) 279-36-13</p></div>
                        <div className="text"><img src={gmail} alt="gmail"  className='gmail'/><p className='gmail'>proauto59@yandex.ru</p></div>
                        <button className='redline-button'>ЗАКАЗАТЬ ЗВОНОК</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
