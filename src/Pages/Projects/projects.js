import React, { useEffect, useRef } from 'react'
import SectionTemplateB from '../../SectionTemplateB/section_template_B'
import TagBubblesSection from '../../Tag_bubbles_section/tag_bubbles_section'
import './projects.css'

import { tagItems } from '../../Tag_bubbles_section/tag_items'
import { hashTagItems } from '../../HashTags/hash_tag_items'
import ThumbnailSection from '../../ShowcaseThumbnail/thumbnail_section'

export default function ProjectPage() {

    // Project Info
    const poxBros_descriptions = 'The final project before graduation, developed alongside a multicultural Agile team of 5 in which members were from different backgrounds and majors including IT, Data science and business information system. Frontend was developed with ReactJs whereas the backend employed a serverless model as well as micro-service architecture using AWS. Relational database (MySQL) was used for storing general data and the results from our self-developed machine-learning model scheduled as a cronjob which is running on our cloud compute instance (EC2) on daily basis. This project aims to help our target audience (people who work in service industry) to stay safe from the current monkeypox disease.'
    const reko_descriptions = 'An image analysis web App that can detect image label backed by AI-based web service - AWS Rekognition. It is a fully responsive single-page web application developed with plain CSS, HTML, JS without using any frameworks'
    const reko_skills = [{ color: '#8C92AC', tag: 'VanillaJS' }, { color: 'rgb(250, 216, 93)', tag: 'NoSQL' }, { color: 'rgb(250, 216, 93)', tag: 'AWS Services' }, { color: 'pink', tag: 'AWS Deployment' }]
    const poxbros_skills = [{ color: 'cornflowerblue', tag: 'React' }, { color: 'cornflowerblue', tag: 'HTML' }, { color: 'cornflowerblue', tag: 'CSS' }, { color: 'rgb(250, 216, 93)', tag: 'Relational Database' }, { color: 'rgb(250, 216, 93)', tag: 'MySQL' }, { color: '#8C92AC', tag: 'AWS Services' }, { color: '#8C92AC', tag: 'Linux' }, { color: 'pink', tag: 'AWS Deployment' }]
    const poxbros_hashtags = [{ tag: 'Serverless-Backend' }, { tag: 'Micro-service' }, { tag: 'Machine-Learning-Deployment' }, { tag: 'Solution-Architecture' }, { tag: 'Cronjob-scheduling' }, { tag: 'Database-daily-update-scheduling' }]
    const reko_hastags = [{ tag: 'DynamoDB' }, { tag: 'RESTful API' }, { tag: 'Serverless-Backend' }, { tag: 'Solution-Architecture' }]

    //Ref declarations
    const poxbros_ref = useRef(null);
    const reko_ref = useRef(null);
    const other_ref = useRef(null);

    //Default to top when page loaded
    const defaultPosition = () => {
        window.scrollTo(0, 0);
    };

    //Handle ref onClick
    const handlePoxbros = () => {
        poxbros_ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleReko = () => {
        reko_ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleOther = () => {
        other_ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const sortRefs = (project) => {
        if (project.includes('poxbros'))
            return handlePoxbros
        else if (project.includes('reko'))
            return handleReko
        else if (project.includes('other'))
            return handleOther
    }

    useEffect(
        defaultPosition
    );



    return (

        <main className='project-page-main'>
            <div className='background-circle project-page-positioned' />
            <section className='container' style={{ paddingBottom: '3%' }}>
                <div className='tag-bubbles-intro'>
                    <h1>Experience</h1>
                    <p>Skills used in the past projects</p>
                </div>
                <TagBubblesSection
                    items={tagItems}
                    padding='0'
                />
                <div className='container-hashtag' style={{ padding: '3% 0%' }}>
                    <div className='even-columns narrow-style'>
                        {hashTagItems.map((item, key) => {
                            return (
                                <p className='tag' key={key} onClick={sortRefs(item.project)}>
                                    #{item.tag}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section ref={reko_ref}>
                <SectionTemplateB
                    img='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/Reko_cover_page.png'
                    url='https://www.rekocloud.click/'
                    heading='Image Analysis Web App'
                    subheading='Feb 2023 - present'
                    body={reko_descriptions}
                    background_color='rgb(255, 232, 236)'
                    items={reko_skills}
                    hashtags={reko_hastags}
                />
            </section>

            <section ref={poxbros_ref}>
                <SectionTemplateB
                    img='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/IE_cover_page.png'
                    url='https://www.charming-ape.click/'
                    heading='Graduation Project'
                    subheading='Aug 2022 - Oct 2022'
                    body={poxBros_descriptions}
                    background_color='white'
                    items={poxbros_skills}
                    hashtags={poxbros_hashtags}
                />
            </section>

            <section className='project-thumbnails-section' ref={other_ref}>
                <ThumbnailSection
                />
            </section>
        </main>
    )
}