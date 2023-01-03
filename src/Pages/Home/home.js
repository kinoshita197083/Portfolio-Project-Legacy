import React, { useEffect } from 'react'
import HeroSection from '../../HeroSection/hero_section'
import SectionTemplateA from '../../SectionTemplateA/section_template_A'
import './home.css'

export default function HomePage() {

    const defaultPosition = () => {
        window.scrollTo(0, 0);
    };

    useEffect(
        defaultPosition
    );

    return (
        <main className='home'>
            <HeroSection />
            <SectionTemplateA />
            {/* <section className='main-section'>
                <div className='container'>
                    <div className='even-columns'>
                        <article className='home-intro'>
                            <h1>Franky</h1>
                            <p>WARNING in [eslint]
                                src/Pages/Home/home.js
                                Line 1:17:  'Component' is defined but never used  no-unused-vars

                                src/Pages/Projects/projects.js
                                Line 1:17:  'Component' is defined but never used  no-unused-vars

                                src/Pages/Resume/resume.js
                                Line 1:17:  'Component' is defined but never used  no-unused-vars</p>
                        </article>
                        <div className='home-main-img'>
                            <img
                                src='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/F8C168AD-333D-479C-A1A9-64D55A37C7D3-1711-000000E1CD517750.jpg'
                                alt='main-img'
                                width='100%'
                                height='auto'
                            />
                        </div>

                    </div>
                </div>

            </section> */}
        </main>
    )
}