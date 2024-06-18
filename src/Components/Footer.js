import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import footer from '../icons_assets/logo.png';
import './Footer.css'
import { faFacebook, faInstagram, faPinterest, faTwitter } from "@fortawesome/free-brands-svg-icons"
const Footer = () => {
    return (
        <footer className="footer bg-primary  py-6" style={{ backgroundColor: '#EDEFEE' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 my-3 d-flex">
                        <img src={footer} alt='error' className='footer-img img-fluid d-none d-md-block rounded-4' />

                    </div>
                    <div className="col-md-3 my-3">
                        <h4 className='fw-bold text-secondary'>Doormat Navigation</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a className=' nav-link text-dark' href="privacy.html">Home</a>
                            </li>
                            <li>
                                <a className=' nav-link text-dark' href="privacy.html">About</a>
                            </li>
                            <li>
                                <a className=' nav-link text-dark' href="privacy.html">Reservations</a>
                            </li>
                            <li>
                                <a className=' nav-link text-dark' href="privacy.html">Order Online</a>
                            </li>
                            <li>
                                <a className=' nav-link text-dark' href="privacy.html">Login</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-3 my-3">
                        <h4 className='fw-bold text-secondary'>Contact</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a className=' nav-link text-dark' href="privacy.html">Address</a>
                            </li>
                            <li>
                                <a className=' nav-link text-dark' href="privacy.html">Phone Number</a>
                            </li>
                            <li>
                                <a className=' nav-link text-dark' href="privacy.html">Email</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-3 my-3 ">
                        <h4 className='fw-bold  text-secondary'>Social  Media Links</h4>
                        <div className="mb-4  ">
                            <a href="#facebook" className="text-decoration-none text-secondary fs-3 mx-2">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#Insta" className="text-decoration-none text-secondary fs-3 me-2">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#Twitter" className="text-decoration-none text-secondary fs-3 me-2">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="#Pinterest" className="text-decoration-none text-secondary fs-3 me-2">
                                <FontAwesomeIcon icon={faPinterest} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}
export default Footer;