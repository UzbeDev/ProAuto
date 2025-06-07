import React from 'react'
import logo from "./../../img/logo.svg"
import savat from "./../../img/savat.svg"
import search from "./../../img/search.svg"
import "./Nav.css"
export default function Nav() {
    return (
        <header>
            <nav>
                <img src={logo} alt="Logo svg" className='logo-svg' />
                <ul className='url-items'>
                    <li className='nav-item'><a href="#">КОМПАНИЯ</a></li>
                    <li className='nav-item'><a href="#">КАТАЛОГ</a></li>
                    <li className='nav-item'><a href="#">УСЛУГИ</a></li>
                    <li className='nav-item'><a href="#">ИНФОРМАЦИЯ</a></li>
                    <li className='nav-item'><a href="#">КОНТАКТЫ</a></li>
                </ul>
                <button type="button" className='redline-button'>ЗАКАЗАТЬ ЗВОНОК</button>
                <img className='search-svg' src={search} alt="" />
                <img className='savat-svg' src={savat} alt="" />
            </nav>
        </header>
    )
}
