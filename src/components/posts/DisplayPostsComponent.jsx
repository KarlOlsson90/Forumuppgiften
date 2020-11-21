import React, {useContext, useEffect } from 'react'
import { StorageContext} from '../../contexts/StorageContext'
import Post from '../../data/Post'
import DisplayPostComponent from './DisplayPostComponent'

export default function DisplayPostsComponent() {

    const { postsData, setPostsData } = useContext(StorageContext)

    async function getPostData(){

        const data = await Post.getPostList()
        setPostsData(data)

    }

    useEffect(() => {
        getPostData()

    }, [])

    return (
        <div>

            {postsData?.map((postObj, index) => {
                return (
                    <DisplayPostComponent key={index} postObj={postObj}></DisplayPostComponent>
                )

            })}
        </div>
    )
}
