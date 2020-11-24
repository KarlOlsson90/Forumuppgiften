import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { StorageContext } from '../../contexts/StorageContext'
import User from '../../data/User'

export default function FormUserComponent(props) {

    const userFields = [["email", "Epost"], ["password", "Lösenord"], ["firstName", "Förnamn"], ["lastName", "Efternamn"], ["country", "Land"]]
    const [form, setForm] = useState(null)
    const {countries, setCountries} = useContext(StorageContext)

    function handleInputChange(event) {
        const name = event.target.name
        const value = event.target.value
        setForm({ ...form, [name]: value })
    }

    async function getCountries() {
        if(!countries){
            const data = await User.getCountries()
            setCountries(data)}
    }

    useEffect(() => {

        getCountries()

    }, [])

    return (
        <div className="container d-flex">
            <form onSubmit={(e) => props.handleSubmit(e, form)} className="col-md-6">
                <br /><br /><br />
                <div className="col-md-10">
                    {userFields.map((field, index) => {
                        if (field[0] === "country") {
                            return (
                                <div className="form-group">
                                    <label>{field[1]}</label>
                                    <select className="custom-select" name={field[0]} onChange={handleInputChange}>
                                        {countries?.map((countryObj, index) => {
                                            return <option key={index} value={countryObj.id}>{countryObj.title}</option>
                                        })}
                                    </select>
                                </div>
                            )
                        } else {
                            return (
                                <div className="form-group" key={index}>
                                    <label>{field[1]}</label>
                                    <input name={field[0]} className="form-control" onChange={handleInputChange}></input>
                                </div>
                            )
                        }
                    })}
                    <button className="btn btn-success float-right" type="submit">Registrera</button>
                </div>
            </form>
            <div className="col-md-6 ">
                <br /><br /><br /><br />
                <div className="col-md-10">
                    <p >Har du redan ett konto? </p>
                    <p className="d-inline">Klicka </p>
                    <Link className="d-inline" to='/user/login'>Här</Link>
                    <p className="d-inline"> för att logga in.</p>
                </div>
            </div>
        </div>
    )
}
