import React, { Component } from 'react'
import PhotoProfile from '../../PhotoProfile/photo_profile'
import './about.css'

export default function AboutPage() {

    return (
        <>
            <div className='container'>
                <div className='even-columns'>
                    <PhotoProfile />
                    <div className='right-wrapper' style={{ paddingLeft: 0 }}>
                        {/* <h1 className='profile-header'>Hey</h1> */}
                        <p><span className='profile-content'>I used to be a psychology student.
                        </span>Even until now, I always find my soul belongs to the humanity realm.
                            <span className='profile-content'> And that's how I ended up here, a frontned developer</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}