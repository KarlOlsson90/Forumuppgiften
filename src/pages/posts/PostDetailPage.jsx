import React, { useState, useEffect } from 'react'
import ContainerPostReplies from '../../components/replies/ContainerPostReplies'
import DisplayReplyComponent from '../../components/replies/DisplayReplyComponent'
import PostReplyComponent from '../../components/replies/ContainerReplyComponent'
import Post from '../../data/Post'

export default function PostDetailPage(props) {

    const [postData, setPostData] = useState({})

    const postId = Number(props.match.params.id)

    const fieldsToDisplay = ["title", "content", "createdAt"]

    async function getPostData() {
        const data = await Post.getSinglePost(postId)
        setPostData(data)
        console.log(postData)
    }

    useEffect(() => {

        getPostData()

    }, [])

    function handleSubmit(input) {
        console.log(input)
        Post.createPost(input)

    }

    return (
        <div>

            {postData && fieldsToDisplay.map((field, index) => {

                    return <div key={index}>{field}: {postData[`${field}`]}</div>
            })}
            <PostReplyComponent postId={postId}></PostReplyComponent>
            <ContainerPostReplies postId={postId}></ContainerPostReplies>
            {/* {postReplies?.map((reply, index) => {
                return <DisplayReplyComponent key={index} reply={reply}></DisplayReplyComponent>
               
            })} */}
            
        </div>
    )
}
