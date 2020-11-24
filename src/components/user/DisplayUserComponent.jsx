import React, { useContext, useEffect } from 'react'
import { StorageContext } from '../../contexts/StorageContext'

import User from '../../data/User'

export default function DisplayUserComponent() {

    const userFields = [["id", "Id"], ["email", "Epost"], ["firstName", "Förnamn"], ["lastName", "Efternamn"], ["title", "Titel"], ["phoneNumber", "Telefonnummer"], ["country", "Land"]]

    const { userData, setUserData } = useContext(StorageContext)
    const { countries, setCountries } = useContext(StorageContext)

    async function getUserData() {

        if (!userData) {
            const data = await User.getUserData()
            setUserData(data)

        }

    }
    async function getCountries() {
        if (!countries) {
            const data = await User.getCountries()
            setCountries(data)
        }
    }
    function connectIdWithCountry(input) {
        const arrayWithCountries = Object.entries(countries)
        console.log(arrayWithCountries)
        const countryName = arrayWithCountries[input-1][1].title
        console.log(countryName)
        return countryName
    }

    useEffect(() => {

        getUserData()
        getCountries()
    }, [])

    return (
        <div>
            {(userData && countries) && userFields.map((field, index) => {
                return (
                    <ul className="list-group" key={index}>

                        {field[0] !== "country" ? (
                            <><br></br><li className="list-group-item"><h5>{field[1]}</h5> {userData[field[0]] || "Saknas"}</li></>)
                            : (
                             <><br></br><li className="list-group-item"><h5>{field[1]}</h5> {connectIdWithCountry(userData[field[0]])}</li></>
                            )}

                    </ul>
                )
            })}
        </div>
    )
}
