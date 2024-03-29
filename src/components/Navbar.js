import React from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'

export default function Navbar() {
    //useLocation hook returns us an object of location information of current event
    let location = useLocation();

    // useEffect(() => {
    //     console.log(location.pathname);
    // }, [location])

    let history = useHistory();

    const handleLogout = ()=>{
        localStorage.removeItem('token');
        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* we have used useLocation to determine the current page and set its path in navbar as active class */}
                        <li className={`"nav-item" ${location.pathname === "/" ? "active" : " "}`}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className={`"nav-item" ${location.pathname === "/about" ? "active" : " "}`}>
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                   {!localStorage.getItem('token')? <form className="d-flex">
                        <Link to="/login" role="button" className="btn btn-primary mx-2 loginBTN">Login</Link>
                        <Link to="/signup" role="button" className="btn btn-primary loginBTN">Sign Up</Link>
                    </form> : <button onClick={handleLogout} className="btn btn-primary loginBTN">Logout</button> }
                </div>
            </div>
        </nav>
    )
}
