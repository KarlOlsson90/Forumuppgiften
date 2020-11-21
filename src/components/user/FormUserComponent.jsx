import React, { useState, useEffect } from 'react'
import User from '../../data/User'


export default function FormUserComponent(props) {

    const fields = ["email", "password", "firstName", "lastName", "country"]

    const [form, setForm] = useState(fields)
    const [countries, setCountries] = useState(null)

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        setForm({ ...form, [name]: value })
    }

    async function getCountries() {
        const data = await User.getCountries()
        setCountries(data)
    }

    useEffect(() => {

        getCountries()

    }, [])

    function runTest() {
        console.log(form)
    }

    return (
        <form>
            {fields.map((field, index) => {
                if (field === "country") {
                    return (
                        <div>
                            <select name={field} onChange={handleInputChange}>
                                {countries?.map((countryObj, index) => {
                                    return <option key={index} value={countryObj.id}>{countryObj.title}</option>
                                })}
                            </select>
                        </div>
                    )
                } else {
                    return (
                        <div key={index}>
                            <label>{field}</label>
                            <input name={field} onChange={handleInputChange}></input>
                        </div>
                    )
                }
            })}
            <button onClick={(e) => props.handleSubmit(e, form)}>Spara</button>
            <button onClick={runTest}>test</button>
        </form>
    )
}
