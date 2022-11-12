import React, { Component } from 'react'
import './footer.css'
import { footerItems } from './footer_items'

export default function Footer() {

    return (

        <footer>
            <div className='footer-container'>
                <div className='footer-header-wrapper'>
                    <i className="fa-solid fa-comments"></i>
                    <p className='footer-header-text'>Franky</p>
                    <p className='footer-header-text'>Chen</p>
                </div>


                <div className='separator-underline' />
                <ul>
                    {footerItems.map((item, key) => {
                        return (
                            <li className='footer-item' key={key}>
                                <a href={item.url} target='_blank'>
                                    <div className='icon-wrapper'>
                                        <i className={item.icon}></i>
                                    </div>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </footer >
    )
}