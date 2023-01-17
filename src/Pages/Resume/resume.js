import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './resume.css'

export default function ResumePage() {

    return (

        <main className='resume-page-main'>
            <div className='background-circle resume-page-positioned' />
            <div className='container '>

                <div className='tag-bubbles-intro'>
                    <h1>Resume</h1>
                    <p>Academic experience & personal projects</p>
                </div>
                <div className='even-columns'>
                    <section className='cv-btn-frame'>
                        {/* <h1 className='cv-resume-header'>Resume</h1> */}
                        <div className='cv-preview-wrapper'>
                            <img
                                src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/CV_Yuzhou_Chen_screenshot.jpg'
                                alt='CV_preview'
                                className='cv-preview-img'
                            />

                        </div>

                        <a target='_blank' href='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/CV_SAAC03_updated.pdf'>
                            <button className='cv-download-btn'>
                                View PDF
                            </button>
                        </a>

                    </section>

                </div>
            </div>
        </main>

    )
}