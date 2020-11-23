import React, {useContext, useEffect } from 'react'
import { StorageContext} from '../../contexts/StorageContext'
import Post from '../../data/Post'
import DisplayPostComponent from './DisplayPostComponent'

export default function ContainerPostsComponent(props) {

    const { postsData, setPostsData } = useContext(StorageContext)

    async function getPostsData(){

        const data = await Post.getPostList()
        setPostsData(data)

    }

    useEffect(() => {
        getPostsData()

    }, [])

    return (
        <div>
            {props.activeCategory}
            {postsData?.map((postObj, index) => {
                if (postObj.category === props.activeCategory){
                return (
                    <>
                    <DisplayPostComponent key={index} postObj={postObj}></DisplayPostComponent>
                    </>
                )}

            })}
        </div>
    )
}
