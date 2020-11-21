import React, {useEffect, useState} from 'react'
import FormUserComponent from '../../components/user/FormUserComponent'
import User from '../../data/User'

export default function RegisterPage() {



    function handleSubmit(e, input) {
        e.preventDefault()
        User.createUser(input)
    }

    return (
        <div>
            <FormUserComponent handleSubmit={handleSubmit}></FormUserComponent>
        </div>
    )
}
