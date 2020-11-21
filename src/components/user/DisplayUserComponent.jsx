import React, { useContext, useEffect } from 'react'
import { StorageContext } from '../../contexts/StorageContext'

import User from '../../data/User'

export default function DisplayUserComponent() {

    const { userData, setUserData } = useContext(StorageContext)

    async function getUserData() {

        if (!userData) {
            const data = await User.getUserData()
            console.log("hämtade data: ", data)
            setUserData(data)
        } else {
            console.log("Data fanns så ingen fetch gjordes: ", userData)
        }

    }

    useEffect(() => {

        getUserData()

    }, [])

    return (
        <div>
            {userData && Object.entries(userData).map((field, index) => {
                return (
                    <div key={index}>
                        <p>{field[0]}: {field[1]}</p>
                    </div>
                )

            })}
        </div>
    )
}
