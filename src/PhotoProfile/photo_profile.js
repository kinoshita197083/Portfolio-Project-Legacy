import React, { Component } from 'react'
import './photo_profile.css'

export default function PhotoProfile() {

    return (
        <>
            <div className='profile-photo-container'>
                <div className='photo-wrapper'>
                    <div className='photo-background animate__animated animate__zoomIn' />
                    <img
                        src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/self-crop.png'
                        alt='profile-pic'
                        className='profile-pic'
                    />
                    {/* <p>Yuzhou Chen, Franky</p> */}
                </div>
            </div>
        </>
    )
}