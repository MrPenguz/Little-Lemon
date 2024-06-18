import React from 'react'
import "./Testimonials.css"
export const Testimonials = () => {
    return (
        <div className='pb-7' style={{ backgroundColor: '#EDEFEE' }} >
            <div className='container text-dark   ' >
                <h2 className='pt-8 pb-5 text-center'>Testimonials</h2>
                <div className='row '>
                    <div className='col-md-3'>
                        <div className='testo-container card text-dark border-0'>
                            <div className='card-body mt-4 '>
                                <h4 className='mb-3 ms-3'>Rating: 10/10</h4>
                                <div className='d-flex gap-3 justify-content-start align-items-center mb-4'>
                                    <img src='https://randomuser.me/api/portraits/men/75.jpg' alt='error' style={{ width: 100 }} class="img-fluid rounded-circle" />
                                    <p>John Doe</p>
                                </div>
                                <p>"Little Lemon is a gem! The ambiance is charming, and the service is top-notch. The Greek salad is a must-try, and their lemon dessert is divine. I'll be back for more!"</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='testo-container card text-dark border-0'>
                            <div className='card-body mt-4 '>
                                <h4 className='mb-3 ms-3'>Rating: 9/10</h4>
                                <div className='d-flex gap-3 justify-content-start align-items-center mb-4'>
                                    <img src='https://randomuser.me/api/portraits/women/74.jpg' alt='error' style={{ width: 100 }} class="img-fluid rounded-circle" />
                                    <p>Emily Ken</p>
                                </div>
                                <p>"Came here with my family for a special occasion, and it was perfect. The atmosphere was warm and inviting, and the food was delicious. We especially loved the moussaka and the grilled octopus."</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='testo-container card text-dark border-0'>
                            <div className='card-body mt-4 '>
                                <h4 className='mb-3 ms-3'>Rating: 10/10</h4>
                                <div className='d-flex gap-3 justify-content-start align-items-center mb-4'>
                                    <img src='https://randomuser.me/api/portraits/women/75.jpg' alt='error' style={{ width: 100 }} class="img-fluid rounded-circle" />
                                    <p>Suzan Baiden</p>
                                </div>
                                <p>"his place is a hidden treasure! The food is incredibly flavorful, and the portions are generous. The staff is friendly and attentive, making for a truly enjoyable dining experience"</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='testo-container card text-dark border-0'>
                            <div className='card-body mt-4 '>
                                <h4 className='mb-3 ms-3'>Rating: 8/10</h4>
                                <div className='d-flex gap-3 justify-content-start align-items-center mb-4'>
                                    <img src='https://randomuser.me/api/portraits/men/72.jpg' alt='error' style={{ width: 100 }} class="img-fluid rounded-circle" />
                                    <p>Jack Mado</p>
                                </div>
                                <p>"Little Lemon is a great place to enjoy a casual and delicious meal. The prices are reasonable, and the food is fresh and well-prepared. I'll definitely be back!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Testimonials;