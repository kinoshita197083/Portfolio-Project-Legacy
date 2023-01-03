import React, { } from 'react'
import './hash_tag.css'
// import { hashTagItems } from './hash_tag_items'

export default function HashTagSection(props) {

    return (
        <>
            <div className='container-hashtag' style={{ padding: '3% 0%' }}>
                <div className='even-columns narrow-style'>
                    {props.items ? props.items.map((item, key) => {
                        return (
                            <p className='tag' key={key}>
                                #{item.tag}
                            </p>
                        )
                    }) : null}
                </div>
            </div>
        </>
    )
}