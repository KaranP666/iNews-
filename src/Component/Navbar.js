import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/General">iNews</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/General">Home</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Category
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/Business">Business</Link></li>
                                        <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/General">General</Link></li>
                                        <li><Link className="dropdown-item" to="/Health">Health</Link></li>
                                        <li><Link className="dropdown-item" to="/Science">Science</Link></li>
                                        <li><Link className="dropdown-item" to="/Sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/Technology">Technology</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        International News
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/Australia">Australia</Link></li>
                                        <li><Link className="dropdown-item" to="/ARGENTINA">ARGENTINA</Link></li>
                                        <li><Link className="dropdown-item" to="/France">France</Link></li>
                                        <li><Link className="dropdown-item" to="/Taiwan">Taiwan</Link></li>
                                        <li><Link className="dropdown-item" to="/Mexico">Mexico</Link></li>
                                        <li><Link className="dropdown-item" to="/United Arab Emirates">United Arab Emirates</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </ul>

                            {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
