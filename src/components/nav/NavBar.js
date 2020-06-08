import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"


const NavBar = props => {

    const handleLogout = () => {
        props.clearUser();
    }

    return (
        <nav className="navbar navbar-light light-blue flex-md-nowrap p-0 shadow">
            <ul className="nav nav-pills nav-fill">
                {props.hasUser
                ?
                <li className="nav-item">
                    <Link className="nav-link" to="/">News</Link>
                </li>
                : null }
                {props.hasUser
                ? 
                <li className="nav-item">
                    <Link className="nav-link" to="/">News</Link>
                </li>
                : null }
                {props.hasUser
                ?
                <li className="nav-item">
                    <Link className="nav-link" to="/friends">Friends</Link>
                </li>
                : null }
                {props.hasUser
                ?
                <li className="nav-item">
                    <Link className="nav-link" to="/messages">Messages</Link>
                </li>
                : null }
                {props.hasUser
                ?
                <li className="nav-item">
                    <Link className="nav-link" to="/tasks">Tasks</Link>
                </li>
                : null }
                <li className="nav-item">
                    {props.hasUser 
                    ? <Link className="nav-link" to="/" onClick={handleLogout}>Logout</Link>
                    : <Link className="nav-link" to="/login">Login</Link>}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar