import React, { useState } from 'react'
import './thumbnail_section.css'
import { projectLists } from './project_list'

export default function ThumbnailSection() {

    const [hovered, setHovered] = useState(false);

    const displayProjectName = () => {
        setHovered(!hovered);
    }

    return (
        <>
            <main>
                <section className='thumbnail-container'>
                    <div className='thumbnail-section-intro'>
                        <h1 className='section-heading'>Other Projects</h1>
                        <p className='section-p1'>Most of the following projects were developed with an allocated Agile team of 4, with members across different cultures and backgrounds. Used stacks include, but not limited to, Asp .Net MVC, C#, Java, Python, AWS, D3, etc.</p>
                    </div>
                    <div className='thumbnail-wrapper'>

                        {projectLists.map((project, key) => {

                            return (
                                <a href={project.url} target='_blank'>
                                    <div className='thumbnail' key={key}>
                                        <img
                                            src={project.img}
                                            width='100%'
                                            height='auto'
                                            alt={project.name}
                                        />
                                        <div className='overlay'>
                                            <div className='project-name'>{project.name}</div>
                                        </div>

                                    </div>
                                </a>

                            )
                        })}
                    </div>

                    <div className='thumbnail-section-intro'>
                        <p className='section-p1'>Note* These projects were mostly meant for academic practising, so most of them are not deployed to the cloud and therefore, not accessible on the internet.</p>
                    </div>
                </section>
            </main>
        </>
    )
}