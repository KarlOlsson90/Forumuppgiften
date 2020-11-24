import React from 'react'
import Post from '../../data/Post'
import FormReplyComponent from './FormReplyComponent'


export default function PostReplyComponent(props) {

    function handleSubmit(e, input) {
        e.preventDefault()
        const body = {
            ...input,
            parent: props.postId
        }
        console.log(body)
        Post.createReply(body)
        props.history.go(0)
    }

    return (
        <div>
            <FormReplyComponent handleSubmit={handleSubmit}></FormReplyComponent>
        </div>
    )
}
