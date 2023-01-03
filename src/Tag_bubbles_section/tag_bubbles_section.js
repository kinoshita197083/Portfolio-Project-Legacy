import React, { } from 'react'
import TagBubble from '../Tag_bubbles/tag_bubble'
import './tag_bubbles_section.css'

export default function TagBubblesSection(props) {

    return (
        <>
            <div className='container' style={{ padding: props.padding }}>
                <div className='even-columns narrow-style'>
                    {props.items != null ? props.items.map((item, key) => {
                        return (
                            <div key={key}>
                                <TagBubble
                                    color={item.color}
                                    tag={item.tag}
                                />
                            </div>
                        )
                    }) : null}
                </div>
            </div>
        </>
    )
}