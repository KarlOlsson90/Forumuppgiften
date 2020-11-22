import React, {useContext} from 'react'
import FormLoginComponent from '../../components/user/FormLoginComponent'
import { StorageContext } from '../../contexts/StorageContext'
import User from '../../data/User'

export default function LoginPage() {

    const {isAuthenticated, setIsAuthenticated} = useContext(StorageContext)

    async function handleSubmit(e, input) {
        e.preventDefault()
        User.loginUser(input)
        if (User.findToken) {
            console.log("inloggad")
            setIsAuthenticated(true)
        }

    }

    return (
        <div>
            <FormLoginComponent handleSubmit={handleSubmit}></FormLoginComponent>
        </div>
    )
}
