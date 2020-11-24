import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StorageContext } from '../contexts/StorageContext'
import User from '../data/User'


export default function NavBarComponent() {

    const { isAuthenticated, setIsAuthenticated } = useContext(StorageContext)

    function logOut() {
        User.destroyToken()
        setIsAuthenticated(false)
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                        <div className="col-md-9">
                        <ul className="navbar-nav">
                            <li className="nav-item active"><Link className="nav-link" to='/landing'>Hem</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/new-post'>Nytt</Link></li>
                            <li className="nav-item"><Link className="nav-link" to='/posts'>Forum</Link></li>
                            {!isAuthenticated && <li className="nav-item"><Link className="nav-link" to='/user/register'>Registrera</Link></li>}
                            {!isAuthenticated && <li className="nav-item"><Link className="nav-link" to='/user/login'>Logga in</Link></li>}
                        </ul>      
                        </div>
                        <div className="col-md-3 float-right">       
                        {isAuthenticated && 
                            <form className="form-inline my-2 my-lg-0 float-right">
                                <button className="btn btn-outline-danger my-2 my-sm-0"  onClick={logOut}>Logga ut</button>
                            </form>
                        }
                        </div>  


            </nav>

        </>
    )
}
