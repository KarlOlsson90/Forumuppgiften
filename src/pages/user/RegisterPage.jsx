import React, { useContext } from 'react'
import FormUserComponent from '../../components/user/FormUserComponent'
import { StorageContext } from '../../contexts/StorageContext'
import User from '../../data/User'

export default function RegisterPage(props) {

    const { setIsAuthenticated } = useContext(StorageContext)

    async function handleSubmit(e, input) {
        e.preventDefault()

        await User.createUser(input)

        if (input) {
            const loginInfo = ({ "email": input.email, "password": input.password })
            loginUser(loginInfo)
        }

    }

    async function loginUser(input) {
        await User.loginUser(input)

        if (User.findToken() && User.findToken().length > 10) {
            setIsAuthenticated(true)

            props.history.push(`/landing`)
        }
    }

    return (
        <div>
            <FormUserComponent handleSubmit={handleSubmit}></FormUserComponent>
        </div>
    )
}
