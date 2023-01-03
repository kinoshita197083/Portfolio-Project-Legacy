import React, { useEffect, useRef } from 'react'
// import HashTagSection from '../../HashTags/hash_tags'
import SectionTemplateB from '../../SectionTemplateB/section_template_B'
import TagBubblesSection from '../../Tag_bubbles_section/tag_bubbles_section'
import './projects.css'

import { tagItems } from '../../Tag_bubbles_section/tag_items'
import { hashTagItems } from '../../HashTags/hash_tag_items'

export default function ProjectPage() {

    // const hash_tag_all = ''
    const poxBros_descriptions = 'The final project before graduation, developed alongside a multicultural Agile team of 5 in which members were from different backgrounds and majors including IT, Data science and business information system. Frontend was developed with ReactJs whereas the backend employed a serverless model as well as micro-service architecture using AWS. Relational database (MySQL) was used for storing general data and the results from our self-developed machine-learning model scheduled as a cronjob which is running on our cloud compute instance (EC2) on daily basis. This project aims to help our target audience (people who work in service industry) to stay safe from the current monkeypox disease.'
    const uv_protection_descriptions = 'A warm-up project for the purpose of gaining feedback and familiar with the Agile development process. The website was developed with WordPress and hosted on AWS Lightsail. This project aims to raise the awareness of potential harmfulness of the UV in Australia, our target audience is overseas student.'
    const uv_protection_skills = [{ color: '#8C92AC', tag: 'WordPress' }, { color: 'rgb(250, 216, 93)', tag: 'Relational Database' }, { color: 'rgb(250, 216, 93)', tag: 'MySQL' }, { color: 'pink', tag: 'AWS Deployment' }]
    const poxbros_skills = [{ color: 'cornflowerblue', tag: 'React' }, { color: 'cornflowerblue', tag: 'HTML' }, { color: 'cornflowerblue', tag: 'CSS' }, { color: 'rgb(250, 216, 93)', tag: 'Relational Database' }, { color: 'rgb(250, 216, 93)', tag: 'MySQL' }, { color: '#8C92AC', tag: 'AWS Services' }, { color: '#8C92AC', tag: 'Linux' }, { color: 'pink', tag: 'AWS Deployment' }]
    const poxbros_hashtags = [{ tag: 'Serverless-Backend' }, { tag: 'Micro-service' }, { tag: 'Machine-Learning-Deployment' }, { tag: 'Solution-Architecture' }, { tag: 'Cronjob-scheduling' }, { tag: 'Database-daily-update-scheduling' }]
    const uv_hastags = [{ tag: 'PHP' }, { tag: 'Relational Database' }, { tag: 'Wordpress' }]


    const poxbros_ref = useRef(null);
    const uv_protection_ref = useRef(null);

    const defaultPosition = () => {
        window.scrollTo(0, 0);
    };

    const handlePoxbros = () => {
        poxbros_ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleUV = () => {
        uv_protection_ref.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const sortRefs = (project) => {
        if (project.includes('poxbros'))
            return handlePoxbros
        else if (project.includes('uv'))
            return handleUV
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

            <section ref={uv_protection_ref}>
                <SectionTemplateB
                    img='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/UV-web-cover.png'
                    heading='Warm up Project (Wordpress)'
                    subheading='July 2022 - July 2022'
                    body={uv_protection_descriptions}
                    background_color='rgb(255, 232, 236)'
                    items={uv_protection_skills}
                    hashtags={uv_hastags}
                />
            </section>

            <section ref={poxbros_ref}>
                <SectionTemplateB
                    img='https://anythingfrenkie.s3.ap-southeast-2.amazonaws.com/IE_cover_page.png'
                    heading='Graduation Project'
                    subheading='Aug 2022 - Oct 2022'
                    body={poxBros_descriptions}
                    background_color='white'
                    items={poxbros_skills}
                    hashtags={poxbros_hashtags}
                />
            </section>
        </main>
    )
}