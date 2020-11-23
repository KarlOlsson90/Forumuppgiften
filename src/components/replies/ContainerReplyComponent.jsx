import React from 'react'
import Post from '../../data/Post'
import FormReplyComponent from './FormReplyComponent'
import Button from '../Theme/forumTheme'

export default function PostReplyComponent(props) {

    function handleSubmit(e, input) {
        e.preventDefault()
        const body = {
            ...input,
            parent: props.postId
        }
        console.log(body)
        Post.createReply(body)

    }

    return (
        <div>
            <FormReplyComponent handleSubmit={handleSubmit}></FormReplyComponent>
            <Button>hej</Button>
        </div>
    )
}
