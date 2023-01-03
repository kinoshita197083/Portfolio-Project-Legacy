import React, { Component } from 'react'
import './resume.css'

export default function ResumePage() {

    return (

        <div style={{ display: 'flex', alignItems: 'center', height: '40rem' }}>
            {/* <h1 style={{ margin: '0 auto' }}>Under development</h1> */}
            <button style={{ margin: '0 auto' }}>
                <a target='_blank' href='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/CV_Yuzhou_Chen_Ver2.pdf'>View PDF</a>
            </button>
        </div>
    )
}