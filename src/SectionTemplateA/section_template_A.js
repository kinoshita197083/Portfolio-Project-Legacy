import React, { Component } from 'react'
import './section_template_A.css'
import { skillsItems } from './skill_section_items'

export default function SectionTemplateA() {

    return (
        <>
            <section>
                <div className='container'>
                    <div className='skill-section-intro'>
                        <h1>The journey to coding</h1>
                        <p>abskdbadks</p>
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
                </div>
            </section>
        </>
    )
}