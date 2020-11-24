import React, {useState} from 'react'
import FormPostComponent from '../../components/posts/FormPostComponent'
import Post from '../../data/Post'

export default function PostCreationPage() {

    function handleSubmit(e, input) {
        e.preventDefault()
        Post.createPost(input)

    }

    return (
        <div>
            <br/>
            <FormPostComponent handleSubmit={handleSubmit}></FormPostComponent>
            
            
        </div>
    )
}
