import React from 'react'
import {Switch, Route} from "react-router-dom";
import DisplayUserComponent from '../components/user/DisplayUserComponent';

export default function HomePage() {
    return (
        <div>
            Hej Användare!

            <DisplayUserComponent></DisplayUserComponent>

        </div>
    )
}
