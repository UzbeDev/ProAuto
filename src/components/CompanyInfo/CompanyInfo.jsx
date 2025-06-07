import React from 'react'
import "./CompanyInfo.css"
import imgPerson from "./../../img/InfoPerson.png"
export default function CompanyInfo() {
    return (
        <section className='company-info'>
            <p className="company-info__title">о компании</p>
            <div className="red-line"></div>
            <div className="container">
                <div className="company-info__main-side">
                    <div className="company-info__img">
                        <img src={imgPerson} alt="imgPerson" className='imgPerson' />
                    </div>
                    <div className="company-info__info">
                        <p>Машина плохо заводится? Аккумулятор вас подводит? Не проблема! Вам в<br />
                            «PRO Auto»! Мы подберём хороший, надёжный, а главное недорогой аккумулятор<br />
                            именно для вашего авто! С 1997 года сеть магазинов «PRO Auto» занимается<br />
                            продажей автомобильных аккумуляторов, масел, расходных материалов, химией<br />
                            и аксессуаров.</p>
                        <button type='button' className="redline-button">УЗНАТЬ БОЛЬШЕ</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
