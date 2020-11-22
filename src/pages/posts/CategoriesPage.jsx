import React, {useState} from 'react'
import DisplayCategories from '../../components/posts/DisplayCategoriesComponent'
import DisplayPostsComponent from '../../components/posts/DisplayPostsComponent'

export default function CategoriesPage() {

    const [ activeCategory, setActiveCategory ] = useState("all")

    function selectCategory(input){
        setActiveCategory(input)
    }
    
    return (
        <div>
            <DisplayCategories selectCategory={selectCategory}></DisplayCategories>
            <DisplayPostsComponent activeCategory={activeCategory}></DisplayPostsComponent>
        </div>
    )
}
