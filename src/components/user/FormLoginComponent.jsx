import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SuperSubmitButton } from '../Theme/ForumTheme'

export default function FormLoginComponent(props) {

    const fields = ["email", "password"]

    const [form, setForm] = useState(fields)

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        setForm({ ...form, [name]: value })
    }

    return (
        <div className="container d-flex">

            <form onSubmit={(e) => props.handleSubmit(e, form)} className="col-md-6 ">
                <br /><br /><br />
                <div className="col-md-10">
                    {fields.map((field, index) => {
                        return (
                            <div className="form-group" key={index}>
                                <label>{field}</label>
                                <input type={field} className="form-control" name={field} onChange={handleInputChange}></input>
                            </div>
                        )

                    })}
                    <SuperSubmitButton type="submit" className="btn btn-primary float-right">Logga in</SuperSubmitButton>
                </div>
            </form>
            <div className="col-md-6 ">
                <br /><br /><br /><br />
                <div className="col-md-10">
                {props.accessDenied && <div className="alert">Det gick inte att logga in med angivna uppgifter</div>}
                    <p >Har du inget konto? </p>
                    <p className="d-inline">Klicka </p>
                    <Link className="d-inline" to='/user/register'>Här</Link>
                    <p className="d-inline"> för att registrera dig.</p>
                </div>
            </div>

        </div>
    )
}
