import React, { Component } from 'react'
import ShadingSection from '../ShadingPageTemplate/shading_section'
import './section_template_A.css'
import { skillsItems } from './skill_section_items'
import { Link } from 'react-router-dom'

// First Section
const heading = "Journey starting from the frontend"
const p1 = "Frontend was something we've never touched in the Uni. Formal education tends to focus on backend and traditional frameworks that geared us with a strong foundation, which is a good thing."
const p2 = "However, I happened to find this serendipity during several project experiences, which really have opened up so many of my wild thoughts"

// Second Section
const heading2 = "Skills";
const p3 = "I have both full stack and Android App experience using .Net MVC and Java, respectively. Whilst cloud computing is one of my major skillsets, passing the AWS SAA-C03 exam with the score of 808/1000 on my first attempt.";

export default function SectionTemplateA() {

    return (
        <>
            <section>
                <div className='container'>
                    <div className='skill-section-intro'>
                        <h1 className='section-heading'>{heading}</h1>
                        <p className='section-p1'>{p1}</p>
                        <p className='section-p1'>{p2}</p>
                    </div>

                    <ShadingSection />

                    <div className='skill-section-intro'>
                        <h1 className='section-heading heading-margin-adjusted'>{heading2}</h1>
                        <p className='section-p1'>{p3}</p>
                    </div>

                    <div className='even-columns'>
                        {skillsItems.map((item, key) => {
                            return (
                                <div className='skill-section' key={key}>
                                    <div className='skill-section-card'>
                                        <i className={item.icon}></i>
                                        <h2 className='skill-section-header'>{item.sub_heading}</h2>
                                        {item.skills ? item.skills.map((skill, key) => {
                                            return (
                                                <div className='skill-section-item' key={key}>{skill}</div>
                                            )
                                        })
                                            : null}

                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <Link to='/Projects'>
                        <div className='btn classic center-positioned'>Projects</div>
                    </Link>
                </div>
            </section>
        </>
    )
}