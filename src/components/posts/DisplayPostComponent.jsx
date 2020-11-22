import React from 'react'
import {Link} from 'react-router-dom'

export default function DisplayPostComponent(props) {
    return (
        <div>
            <br/>
            <Link to={`/posts/${props.postObj.id}`}>{props.postObj.title}</Link>
            <br/>
        </div>
    )
}
