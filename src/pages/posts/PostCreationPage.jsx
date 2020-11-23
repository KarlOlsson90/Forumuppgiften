import React, {useState} from 'react'
import FormPostComponent from '../../components/posts/FormPostComponent'
import Post from '../../data/Post'

export default function PostCreationPage() {

    function handleSubmit(input) {
        console.log(input)
        Post.createPost(input)

    }

    return (
        <div>
            <FormPostComponent handleSubmit={handleSubmit}></FormPostComponent>
            
            
        </div>
    )
}
