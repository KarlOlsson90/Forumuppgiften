import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { StorageContext } from '../contexts/StorageContext'
import User from '../data/User'

export default function NavBarComponent() {

    const {isAuthenticated, setIsAuthenticated} = useContext(StorageContext)

    function testOne(){
        console.log(sessionStorage)
    }
    function testTwo(){
        User.destroyToken()
        console.log(sessionStorage)
        setIsAuthenticated(false)
    }
    function testThree(){
        console.log(isAuthenticated)

    }
    function checkToken(){
        User.findToken()? (console.log("token finns")) : (console.log("token finns inte"))
     }
     function loginTestUser(){
         User.loginUser({email: "dybadys@mailinator.com", password:"NatusconsequaturN"})
         console.log("Loggade in")
         setIsAuthenticated(true)
     }
     function getUser(){
        console.log(User.getUserData())
     }

    return (
        <ul>
            <li><Link to='/landing'>Hem</Link></li>
            <li><Link to='/post'>Post</Link></li>
            <li><Link to='/posts'>Posts</Link></li>
            <li><Link to='/categories'>categories</Link></li>
            <li><Link to='/user/register'>Register</Link></li>
            <li><Link to='/user/login'>Login</Link></li>
            <button onClick={testOne}>Logga sessionStorage</button>
            <button onClick={testTwo}>Förstör Token (Logga ut)</button>
            <button onClick={checkToken}>Kolla om token finns (Bool)</button>
            <button onClick={loginTestUser}>Logga in testanvändare</button>
            <button onClick={getUser}>Logga användare</button>
        </ul>
        
    )
}
