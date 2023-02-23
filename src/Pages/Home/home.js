import React, { useEffect, useState } from 'react'
import HeroSection from '../../HeroSection/hero_section'
import SectionTemplateA from '../../SectionTemplateA/section_template_A'
import './home.css'

export default function HomePage() {

    const defaultPosition = () => {
        window.scrollTo(0, 0);
    };

    useEffect(
        defaultPosition, []
    );

    //background color listner var
    const [background, setBackground] = useState('');
    const [shading, setShading] = useState('');

    const scrollEventListner = () => {
        if (window.scrollY > 1750) {
            setBackground("#292828");
            setShading('transparent');
        }
        else {
            setBackground("white");
            setShading("aliceblue")
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollEventListner)
    }
    );

    return (
        <main className='home' style={{ backgroundColor: background, transition: '0.6s ease' }}>
            <HeroSection />
            <SectionTemplateA
                header_color={'white'}
                p1_color={'white'}
                shading={shading}
            />
        </main>
    )
}