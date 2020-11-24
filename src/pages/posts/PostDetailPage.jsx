import React, { useState, useEffect } from 'react'
import ContainerPostReplies from '../../components/replies/ContainerPostReplies'
import PostReplyComponent from '../../components/replies/ContainerReplyComponent'
import Post from '../../data/Post'
import { Link } from 'react-router-dom'

export default function PostDetailPage(props) {

    const [postData, setPostData] = useState({})

    function convertedDate(date){
        if (date) {
            const convertedDate = date.substr(0,10) 
            const convertedTime = date.substr(11,5) 
            const output = convertedDate + " kl. "+convertedTime
            return output
        }
        
    }

    const postId = Number(props.match.params.id)

    async function getPostData() {
        const data = await Post.getSinglePost(postId)
        setPostData(data)
        console.log(postData)
    }

    useEffect(() => {

        getPostData()

    }, [])

    return (
        <div>
            <br/>
            <Link to={`/posts/`}>Tillbaka till forumet</Link>
            <br/> <br/>
            {postData &&<div className="card bg-dark text-white">
                <div className="card-header">
                {postData.title}&nbsp;
                {convertedDate(postData.createdAt)}
                </div>
                <div className="card-body bg-light text-dark">
                    <p>{postData.content}</p>
                </div>

            </div>}
            <br/>
            <PostReplyComponent postId={postId} history={props.history}></PostReplyComponent>
            <ContainerPostReplies postId={postId} convertedDate={convertedDate}></ContainerPostReplies>
            
        </div>
    )
}
