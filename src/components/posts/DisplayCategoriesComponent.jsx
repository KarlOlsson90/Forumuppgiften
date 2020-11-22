import React, { useContext, useEffect } from 'react'
import { StorageContext } from '../../contexts/StorageContext'
import Post from '../../data/Post'
import DisplayCategory from './DisplayCategory'

export default function DisplayCategories(props) {

    const { categoriesData, setCategoriesData } = useContext(StorageContext)


    async function getCategoryData() {

        if (!categoriesData) {
            const data = await Post.getCategories()
            setCategoriesData(data)
        } else {
            console.log("Kategoridata fanns redan så ingen fetch gjordes")
        }
    }

    function handleOnClick(input) {
        props.selectCategory(input)
    }

    useEffect(() => {

        getCategoryData()

    }, [])

    return (
        <div>

            {categoriesData?.map((categoryObj, index) => {

                return (
                    <DisplayCategory key={index} categoryObj={categoryObj} handleOnClick={handleOnClick}></DisplayCategory>
                )

            })}
            
        </div>
    )
}
