import React, { useState } from 'react'
import { SubmitButton } from '../Theme/ForumTheme'

export default function FormReplyComponent(props) {

    const fields = ["title", "content"]

    const [form, setForm] = useState(fields)

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        setForm({ ...form, [name]: value })
    }
    
    return (
        <div className="card bg-light ">
            <div className="card-body">
                <form onSubmit={(e) => props.handleSubmit(e, form)}>

                    <div className="form-group">
                        <input placeholder="Rubrik" className="col-md-12" name="title" onChange={handleInputChange}></input>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Skriv en kommentar här" className="col-md-12" name="content" onChange={handleInputChange}></textarea>
                    </div>
                    <div className="form-group">
                        <SubmitButton className="btn btn-primary float-right" type="submit">Kommentera</SubmitButton>
                    </div>
                </form>
            </div>
        </div>
    )
}
