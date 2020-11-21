import React from 'react'

export default function DisplayPostComponent(props) {
    return (
        <div>
            <br/>
            {props.postObj.title}
            <br/>
        </div>
    )
}
