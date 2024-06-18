import React, { Fragment } from 'react'
import logo from '../Logo.svg';
const Nav = () => {
    return (
        <Fragment>
            <div className='row'>
                <nav className="navbar navbar-expand-lg fixed-top  bg-white  ">
                    <div className="container">
                        <a href="index.html" className="navbar-brand ">
                            <img src={logo} alt="ss" />
                        </a>
                        <button className="navbar-toggler text-bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
                            <span className="navbar-toggler-icon text-dark"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto me-5">
                                <li className="nav-item text-secondary">
                                    <a href="/home" className="nav-link fw-semibold ">Home</a>
                                </li>
                                <li className="nav-item text-secondary">
                                    <a href="#about" className="nav-link fw-semibold">About</a>
                                </li>
                                <li className="nav-item text-secondary">
                                    <a href="/Reserve" className="nav-link  fw-semibold btn btn-outline-secondary border border-dark border-1  active ">Reservation</a>
                                </li>
                                <li className="nav-item text-secondary">
                                    <a href="#order" className="nav-link  fw-semibold ">Order Online</a>
                                </li>
                                <li className="nav-item text-secondary">
                                    <a href="#Login" className="nav-link  fw-semibold ">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}
export default Nav;
