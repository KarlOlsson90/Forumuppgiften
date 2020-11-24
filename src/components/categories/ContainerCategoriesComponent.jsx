import React, { useContext, useEffect } from 'react'
import { StorageContext } from '../../contexts/StorageContext'
import Post from '../../data/Post'
import DisplayCategory from './DisplayCategoryComponent'

export default function ContainerCategoriesComponent(props) {

    const { categoriesData, setCategoriesData } = useContext(StorageContext)

    async function getCategoryData() {

        if (!categoriesData) {
            const data = await Post.getCategories()
            data.push({id:999, title: "All Categories"})
            setCategoriesData(data)
        }
    }

    function handleOnClick(input) {
        props.selectCategory(input)
    }

    useEffect(() => {

        getCategoryData()

    }, [])

    return (
        <div className="container">
            <br/>
            {categoriesData?.map((categoryObj, index) => {

                return (
                    <DisplayCategory key={index} categoryObj={categoryObj} handleOnClick={handleOnClick}></DisplayCategory>
                )

            })}
            
        </div>
    )
}
