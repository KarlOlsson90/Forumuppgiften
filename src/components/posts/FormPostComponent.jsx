import React, { useState, useEffect, useContext } from 'react'
import { StorageContext } from '../../contexts/StorageContext'
import Post from '../../data/Post'
import { SubmitButton } from '../Theme/ForumTheme'


export default function FormPostComponent(props) {

    const fields = ["title", "content", "category"]

    const [form, setForm] = useState(fields)

    const {categoriesData, setCategoriesData} = useContext(StorageContext)

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        setForm({ ...form, [name]: value })
    }

    async function getCats(){
        if(!categoriesData){
            const data = await Post.getCategories()
            setCategoriesData(data)
        }

    }

    useEffect(() => {

        getCats()

    }, [])
       

    return (

        <form onSubmit={(e) => props.handleSubmit(e, form)}>

            <div className="card bg-light ">
                <div className="card-body">
                    <div className="form-group">
                        <input placeholder="Rubrik" className="col-md-12" name="title" onChange={handleInputChange}></input>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Skriv ditt inlägg här" className="col-md-12" name="content" onChange={handleInputChange}></textarea>
                    </div>
                    <div className="form-group">
                        <select className="col-md-12" name="category" onChange={handleInputChange}>
                        {categoriesData?.map((categoryObj, index) => {
                                            if (categoryObj.id != 999) {
                                            return <option key={index} value={categoryObj.id}>{categoryObj.title}</option>
                                        }
                                        })}
                        </select>
                    </div>

                    <SubmitButton type="submit" className="btn btn-primary float-right">Publicera</SubmitButton>
                </div>
            </div>


        </form>
    )
}
