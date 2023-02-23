import React, { Component } from 'react';
import './shading_section.css';
import { badgeItems } from './badge_list';

const heading = "Certificates";
const p1 = "*The digital version of the BPS acredited Personality test user (trait) and Associated test user (trait) are currently unavailable, please contact for the hard copy if it's required.";

export default function ShadingSection(props) {

    return (
        <>
            <div className='container background-color-aliceblue' style={{ backgroundColor: props.shading_color, transition: '0.2s' }}>
                <div className='even-columns'>
                    <section className='shading-section-main'>
                        <div className='shading-section-intro'>
                            <h1 className='section-heading'>{heading}</h1>
                            <p className='section-p1'>{p1}</p>
                        </div>

                        <div className='even-columns badge-showcase badge-column-gap-adjusted'>
                            {badgeItems.map((badge, key) => {

                                return (
                                    <a href={badge.href} target='_blank' key={key}>
                                        <div className='badge-wrapper'>
                                            <img
                                                src={badge.img}
                                                alt={badge.description}
                                                width='100%'
                                                height='auto'
                                            />
                                        </div>
                                    </a>
                                )
                            })}
                        </div>

                    </section>
                </div>
            </div>
        </>
    )
}