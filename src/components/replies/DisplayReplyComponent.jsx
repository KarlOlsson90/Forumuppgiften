import React from 'react'

export default function DisplayReplyComponent(props) {
    return (
        <div>
            {props.reply.author.firstName}:
            {props.reply.content}
            <br/><br/>
        </div>
    )
}
