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
                    <div >
                        <h1 className='heading animate__animated animate__fadeIn'>Hey<span className='h1-span'>!</span> my name is Franky</h1>
                        <h3 className='sub-heading'>A fresher, who has a keen interest in frontend development</h3>
                        <a href='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/CV_SAAC03_updated.pdf' target='_blank'>
                            <div className='btn classic main-section-positioned'>Resume</div>
                        </a>

                        <div className='background-circle large animate__animated animate__flipInX' />
                        <div className='background-circle small' />
                    </div>
                </div>
            </article>
        </section>
    )
}