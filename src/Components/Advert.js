import React, { Fragment } from 'react'
import food from '../icons_assets/Mario and Adrian b.jpg';
import food1 from '../icons_assets/restaurant chef B.jpg';
const Advert = () => {
    return (
        <Fragment className='bg-secondary'>
            <div className='bg-secondary content'>
                <div className='container  d-flex '>
                    <div className=' row pt-5 mx-auto '>
                        <div className='col-lg-6 pt-lg-5 '>
                            <h1 className='text-primary'>Little Lemon</h1>
                            <h3 className='text-dark'>Chicago</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam doloremque, aliquid aliquam dolores enim tempora quas unde? Fuga natus minus commodi doloremque labore quas eius quibusdam atque, totam, officiis iste.
                            </p>
                        </div>
                        <div className='col-lg-6'>
                            <img src={food} alt='Error' className='img-fluid rounded-5 d-none d-md-block' style={{ width: 300, height: 400, marginLeft: 200 }} />
                            <img src={food1} alt='Error' className='img-fluid rounded-5 d-none d-md-block ' style={{ margin: 30, marginTop: -300, marginLeft: 100, width: 300, height: 400 }} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Advert;
