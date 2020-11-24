import React, {useState, useEffect} from 'react'
import ContainerCategoriesComponent from '../../components/categories/ContainerCategoriesComponent'

import ContainerPostsComponent from '../../components/posts/ContainerPostsComponent'
export default function PostsPage() {

    const [ activeCategory, setActiveCategory ] = useState(null)

    function selectCategory(input){
        setActiveCategory(input)
    }

    useEffect(() => {

        setActiveCategory(999)

    }, [])

    return (
        <div>
            <ContainerCategoriesComponent selectCategory={selectCategory}></ContainerCategoriesComponent>
            <ContainerPostsComponent activeCategory={activeCategory}></ContainerPostsComponent>
        </div>
    )
}