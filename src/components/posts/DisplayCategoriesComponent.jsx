import React, { useContext, useEffect } from 'react'
import { StorageContext } from '../../contexts/StorageContext'
import Post from '../../data/Post'
import DisplayCategory from './DisplayCategory'

export default function DisplayCategories() {

    const {categoriesData, setCategoriesData} = useContext(StorageContext)


    async function getCategoryData() {

        if (!categoriesData) {
            const data = await Post.getCategories()
            setCategoriesData(data)
        } else {
            console.log("categoridata fanns redan så ingen fetch gjordes")
        }
    }

    useEffect(() => {

        getCategoryData()

    }, [])

    return (
        <div>
            
            {categoriesData?.map((categoryObj, index) => {
            return (
                <DisplayCategory key={index} categoryObj={categoryObj}></DisplayCategory>
            )

        })}
        </div>
    )
}
