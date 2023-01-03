import React from 'react'
import './tag_bubble.css'

export default function TagBubble(props) {

    return (
        <>
            <div className='tag-item' style={{ backgroundColor: `${props.color}` }} key={props.key}>
                {props.tag}
            </div>
        </>
    )
}