import React, { useState } from 'react'
import './navbar.css'
import './menu_items.js'
import { MenuItems } from './menu_items.js'
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [clicked, setClicked] = useState(false);

    return (
        <nav className='navbar-main-wrapper'>
            <div className='menu-icon' onClick={() => setClicked(!clicked)}>
                <i className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"} ></i>
            </div>

            <ul className={clicked ? 'navbar-content active' : 'navbar-content'} >
                {MenuItems.map((item, key) => {
                    return (
                        <li key={key} onClick={() => setClicked(!clicked)} >
                            <Link to={item.url} className={item.className}>
                                {item.item}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}