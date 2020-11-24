import React, { useContext, useState } from 'react'
import FormLoginComponent from '../../components/user/FormLoginComponent'
import { StorageContext } from '../../contexts/StorageContext'
import User from '../../data/User'

export default function LoginPage(props) {

    const { setIsAuthenticated } = useContext(StorageContext)
    const [ accessDenied, setAccessDenied] = useState(false)

    async function handleSubmit(e, input) {
        e.preventDefault()
        await User.loginUser(input)

        if (User.findToken() && User.findToken().length > 10) {
            setIsAuthenticated(true)

            setAccessDenied(false)
            props.history.push(`/landing`)
        } else { 
            setAccessDenied(true) }

    }

    return (
        <div>
            <FormLoginComponent handleSubmit={handleSubmit} accessDenied={accessDenied}></FormLoginComponent>
        </div>
    )
}
