import React from 'react'
import './Menu.css'
import greek from '../icons_assets/Greek-Salad.jpg';
import bruch from '../icons_assets/bruchetta.svg';
import lemon from '../icons_assets/lemon dessert.jpg';
const Menu = () => {
    return (
        <div className='container my-7 '>
            <div className='row d-flex  mx-5'>
                <div className='col-lg-6   '>
                    <h1 className='text-dark text-start fs-1  fw-semibold  '>Specials</h1>
                </div>
                <div className='col-lg-6  d-flex justify-content-end alight-item-center '>
                    <div className='text-end'>
                        <p className=' button btn btn-primary border border-dark border-1 fw-semibold fs-4   '>Online Menu</p>
                    </div>
                </div>
            </div>
            <div className='row my-7 mx-7 gap-5 '>
                <div className="col-xl-4 cards ">
                    <div className="card border-0  ">
                        <img src={greek} className='border border-dark rounded-top-5 ' style={{ height: 180 }} alt="" />
                        <div class="card-body  rounded-bottom-2 text-dark " style={{ backgroundColor: '#EDEFEE' }}>
                            <div className='row card-title ' >
                                <h5 className="col-md-6 me-2 ">Greek Salad</h5>
                                <h5 className="col-md-6 " style={{ color: 'orange' }}>13.99$</h5>
                            </div>
                            <p className="card-text lh-1">
                                The famous greek salad of crispy lettuce, peppers, olives and our style feta cheese, garnished with crunchy garlic and rosemary croutons.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 cards ">
                    <div className="card border-0  ">
                        <img src={bruch} className='border border-dark rounded-top-5 ' alt="" style={{ height: 180 }} />
                        <div class="card-body  rounded-bottom-2 text-dark " style={{ backgroundColor: '#EDEFEE' }}>
                            <div className='row card-title  ' >
                                <h5 className="col-md-6 me-2 ">Bruchetta</h5>
                                <h5 className="col-md-6  " style={{ color: 'orange' }}>13.99$</h5>
                            </div>
                            <p className="card-text lh-1">
                                Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 cards ">
                    <div className="card border-0  ">
                        <img src={lemon} className='border border-dark rounded-top-5 ' alt="" style={{ height: 180 }} />
                        <div class="card-body rounded-bottom-2 text-dark " style={{ backgroundColor: '#EDEFEE' }}>
                            <div className='row card-title '>
                                <h5 className="col-md-6 me-2 ">Lemon Dessert</h5>
                                <h5 className="col-md-6 " style={{ color: 'orange' }}>13.99$</h5>
                            </div>
                            <p className="card-text lh-1">
                                This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
export default Menu;