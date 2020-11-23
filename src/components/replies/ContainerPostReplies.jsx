import React, {useEffect, useState} from 'react'
import Post from '../../data/Post'
import DisplayReplyComponent from './DisplayReplyComponent'

export default function ContainerPostReplies(props) {

    const [postReplies, setPostReplies] = useState(null)

    async function getPostReplies() {
        const data = await Post.getSinglePostReplies(props.postId)
        setPostReplies(data)
    }

    useEffect(() => {

        getPostReplies()

    }, [])
    
    return (
        <div>
            <p>hej</p>
            {postReplies?.map((reply, index) => {
                return <DisplayReplyComponent key={index} reply={reply}></DisplayReplyComponent>
               
            })}
        </div>
    )
}
