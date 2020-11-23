import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StorageContext } from '../contexts/StorageContext'
import User from '../data/User'

export default function NavBarComponent() {

    const { isAuthenticated, setIsAuthenticated } = useContext(StorageContext)

    function testTwo() {
        User.destroyToken()
        console.log(sessionStorage)
        setIsAuthenticated(false)
    }

    function loginTestUser() {
        User.loginUser({ email: "dedufy@mailinator.com", password: "Doloredolorconsequ" })
        console.log("Loggade in")
        setIsAuthenticated(true)
    }


    return (
        <ul>
            <li><Link to='/landing'>Hem</Link></li>
            <li><Link to='/new-post'>New Post</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
            <li><Link to='/user/register'>Register</Link></li>
            <li><Link to='/user/login'>Login</Link></li>
            <button onClick={testTwo}>Förstör Token (Logga ut)</button>
            <button onClick={loginTestUser}>Logga in testanvändare</button>
        </ul>

    )
}
