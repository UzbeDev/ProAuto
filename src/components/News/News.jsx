import React from 'react'
import news1 from "./../../img/news1.png"
import news2 from "./../../img/news2.png"
import news3 from "./../../img/news3.png"
import "./News.css"
import union from "./../../img/Union.svg"
export default function News() {
    return (
        <section className='news-section'>
            <div className="container">

                <p className="news-section__title">новости</p>
                <div className="red-line"></div>
                <div className="new-cards">
                    <div className="new-card">
                        <img src={news1} alt="news-img" />
                        <div className="card-header">
                            <p className='card-date'>12 февраля 2020 года</p>
                            <p className='card-new-text'>У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!</p>
                            <img src={union} alt="union" />
                        </div>
                    </div>
                    <div className="new-card">
                        <img src={news2} alt="news-img" />
                        <div className="card-header">
                            <p className='card-date'>10 февраля 2020 года</p>
                            <p className='card-new-text'>ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA </p>
                            <img src={union} alt="union" />
                        </div>
                    </div>
                    <div className="new-card">
                        <img src={news3} alt="news-img" />
                        <div className="card-header">
                            <p className='card-date'>5 февраля 2020 года</p>
                            <p className='card-new-text'>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ</p>
                            <img src={union} alt="union" />
                        </div>
                    </div>
                </div>
                <button className='redline-button'>ЧИТАТЬ ВСЕ НОВОСТИ</button>
            </div>
        </section>
    )
}
