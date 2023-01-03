import React, { Component } from 'react'
import './hero-section.css'

export default function HeroSection() {
    // const heading_style = {
    //     color: 'black',
    //     fontSize: '4.5em',
    //     fontWeight: 'normal',
    //     textAlign: 'left',
    //     marginTop: '5rem'
    // }

    // const sub_heading_style = {
    //     color: 'grey',
    //     fontSize: '2.7rem',
    //     fontWeight: 'normal',
    //     textAlign: 'left'
    // }

    return (
        <section className='hero-main'>
            <article>
                <div className='container'>
                    <h1 className='heading animate__animated animate__fadeIn'>Hey! my name is Franky</h1>
                    <h3 className='sub-heading'>A fresh grad, who's keen to be a frontend developer</h3>

                    <div className='background-circle large animate__animated animate__flipInX' />
                    <div className='background-circle small' />
                </div>
            </article>
        </section>
    )
}