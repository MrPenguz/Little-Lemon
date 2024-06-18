import React from 'react'
import resto from '../icons_assets/restauranfood.jpg';
import './Header.css';
const Header = () => {
    return (
        <header className=' bg-secondary'>
            <div className='  container my-6 py-4 '>
                <div className='row mx-5' id='/home#about'>
                    <div className='col-lg-6  mt-5  d-flex flex-column align-items-start'>
                        <h1 className='text-primary fw-semibold text-start'>Little Lemon</h1>
                        <h2 className='text-dark fw-semibold text-start'>Chicago</h2>
                        <p className='fw-semibold text-start text-dark'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi aspernatur laboriosam nihil in vel. Pariatur consequuntur perferendis repellat neque ullam.</p>
                        <a href='/reserve'> <button className='btn btn-primary text-dark border-1 fw-bold border border-black  mt-3 fs-5 '>Reverse a Table</button> </a>
                    </div>
                    <div className='col-lg-6'>
                        <img src={resto} alt='ss' className=' Header-container restoimg img-fluid d-flex d-none d-lg-block' ></img>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
