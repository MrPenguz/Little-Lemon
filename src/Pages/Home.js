import React, { Fragment } from 'react'
import Nav from '../Components/Nav';
import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Testimonials from '../Components/Testimonials';
import Advert from '../Components/Advert';
import Footer from '../Components/Footer';
export const Home = () => {
    return (
        <Fragment>
            <Nav />
            <Header />
            <Menu />
            <Testimonials />
            <Advert />
            <Footer />
        </Fragment>
    )
}
