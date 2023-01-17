import React, { Component } from 'react'
import './footer.css'
import { footerItems } from './footer_items'

export default function Footer() {

    return (

        <footer>
            <div className='footer-container'>

                <div style={{ color: 'white' }}>
                    <p style={{ marginBottom: '0', fontSize: '1.4em' }}>GET IN TOUCH</p>
                    <p style={{ marginTop: '3px', color: 'grey' }}>Available to work Anytime</p>
                </div>

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
                <p style={{ color: 'grey', paddingTop: '13px', fontSize: '0.8em' }}>self-developed • fully-responsive • personal portfolio website with ReactJs • 2023</p>
            </div>
        </footer >
    )
}