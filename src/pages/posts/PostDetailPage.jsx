import React, { useState, useEffect } from 'react'
import Post from '../../data/Post'

export default function PostDetailPage(props) {

    const [postData, setPostData] = useState({})

    const postId = Number(props.match.params.id)

    const fieldsToDisplay = ["title", "content", "createdAt", "responses"]

    async function getPostData() {
        const data = await Post.getSinglePost(postId)
        setPostData(data)
        console.log(postData)
    }

    async function getReplies(){
        const data = await Post.getSinglePostReplies(postId)
        console.log("replies: ", data)
    }

    function testet() {
        getReplies()
    }

    useEffect(() => {

        getPostData()

    }, [])

    return (
        <div>
            <button onClick={testet}>Hämta kommentarer för inlägg {postId}</button>
            {postData && fieldsToDisplay.map((field, index) => {
                if (field === "responses") {
                    <div></div>
                } else {
                    return <div>{field}: {postData[`${field}`]}</div>
                }
            }


            )}
        </div>
    )
}
