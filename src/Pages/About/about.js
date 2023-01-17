import React, { useEffect } from 'react'
import PhotoProfile from '../../PhotoProfile/photo_profile'
import ShadingSectionEvenColumn from '../../ShadingPageTemplateEvenCol/shading_section_even_col';
import './about.css'

// Text contents
const profile_header = "Profile";
const profile_subheader = "My name is Franky, an IT & Psychology fresher";
const p1 = "Yes, that's correct. I used to be a psychology student. I've been studying psychology in the UK for quite a while and it's always been my faviourite subject. However, my life also seems to have reached a big turning point ever since I met my partner, there've been so much that we must overcome, yet meeting her is still the best thing in my life.";
const p2 = "I think I can consider myself an multicultural individual. I was born in China, raised in Hong Kong, I began my overseas study since I was 16, had been studied acorss many cities in the UK. My life story has cultivated my high adpatability, which I turned out to have extremely high openness in so many things. I'm comfortable to dive into a completely new subject. I'm also comfortable to work with individuals across different backgrounds and cultures. And I never afraid of stepping out my comfort zone.";

const profile_subheader2 = "More about myself";

export default function AboutPage() {

    const defaultPosition = () => {
        window.scrollTo(0, 0);
    }

    useEffect(
        defaultPosition
    );

    return (
        <>
            <div className='container'>
                <div className='even-columns'>
                    <PhotoProfile />
                    <div className='right-wrapper' style={{ paddingLeft: 0 }}>
                        <h1 className='profile-header'>{profile_header}</h1>
                        <h2 className='profile-subheader'>{profile_subheader}</h2>
                        <p className='section-p1 text-align-left'>{p1}</p>

                        <h2 className='profile-subheader'>{profile_subheader2}</h2>
                        <p className='section-p1 text-align-left'>{p2}</p>
                    </div>

                </div>
                <ShadingSectionEvenColumn />
            </div>
        </>
    )
}