import React, { } from 'react'
import HashTagSection from '../HashTags/hash_tags';
// import { hashTagItems } from '../HashTags/hash_tag_items';
import TagBubblesSection from '../Tag_bubbles_section/tag_bubbles_section';
import './section_template_B.css'

export default function SectionTemplateB(props) {

    const background_color = props.background_color;

    return (
        <>
            <div className='container-padding-left-0' style={{ backgroundColor: `${background_color}` }}>
                <div className='even-columns'>
                    <div className='left-wrapper'>
                        <div className='templateB-img-wrapper'>
                            <img src={props.img}
                                alt='img-showcase'
                                width='100%'
                                height='auto' />
                        </div>
                        <TagBubblesSection
                            items={props.items}
                            padding='2% 2% 9% 2%'
                        />
                    </div>

                    <div className='right-wrapper'>
                        <div className='showcase-intro'>
                            <h1>{props.heading}</h1>
                            <h4>{props.subheading}</h4>
                            <p>{props.body}</p>
                        </div>
                        <HashTagSection
                            items={props.hashtags}
                            scroll={props.scroll}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}