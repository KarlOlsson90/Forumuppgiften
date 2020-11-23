import React, { useContext } from 'react'
import {  Route } from 'react-router-dom'
import { StorageContext } from '../contexts/StorageContext'
import User from '../data/User'
import jwt_decode from "jwt-decode";

export default function PrivateRoute({ component: Component, ...rest }) {

    const { isAuthenticated, setIsAuthenticated } = useContext(StorageContext)

    function compareTokenExp(token) {

        var decodedToken = jwt_decode(token);

        var expireDate = (decodedToken.exp * 1000)

        var currentDate = new Date().getTime()

        if (expireDate > currentDate) {
            return true

        } else {
            return false
        }
    }

    function validateToken() {

        var token = User.findToken();

        if (token) {
            setIsAuthenticated(compareTokenExp(token))
        } else {
            setIsAuthenticated(false)
        }


    }

    return <Route
        {...rest}
        render={props => (
            validateToken(),
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                    <div>Inte inloggad</div>
                )
        )}
    />
}
