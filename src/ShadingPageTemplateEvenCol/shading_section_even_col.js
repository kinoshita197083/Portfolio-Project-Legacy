import React, { Component } from 'react';
import './shading_section_even_col.css';

const header = "INFJ-T";
const subheader = "Personality Profile";
const p1 = "";

export default function ShadingSectionEvenColumn() {

    return (
        <>
            <div className='container background-color-yellow margin-block-3'>
                <div className='even-columns padding-0-8'>
                    <div className='personality-icon-wrapper'>
                        <img
                            src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/infj_portrait.png'
                            alt='INFJ portrait'
                            width='100%'
                            height='auto'
                        />
                    </div>

                    <div className='personality-intro-main'>
                        <h1 className='profile-header'>{header}</h1>
                        <h1 className='profile-subheader'>{subheader}</h1>
                        <ul className='section-ul'>
                            <li>Seeking Purpose</li>
                            <li>Connecting with Others (and Themseleves)</li>
                            <li>A Sense of Mission</li>
                            <li>Principled</li>
                            <li>Altruistic</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}