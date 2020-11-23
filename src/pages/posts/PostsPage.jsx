import React, {useState} from 'react'
import ContainerCategoriesComponent from '../../components/categories/ContainerCategoriesComponent'

import ContainerPostsComponent from '../../components/posts/ContainerPostsComponent'
export default function PostsPage() {

    const [ activeCategory, setActiveCategory ] = useState("all")

    function selectCategory(input){
        setActiveCategory(input)
    }
    
    return (
        <div>
            <ContainerCategoriesComponent selectCategory={selectCategory}></ContainerCategoriesComponent>
            <ContainerPostsComponent activeCategory={activeCategory}></ContainerPostsComponent>
        </div>
    )
}