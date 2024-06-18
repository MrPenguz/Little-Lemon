import React, { Fragment, useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from '../../API/api';
const Form = (props) => {
    const [date, setDate] = useState('');
    const [dateisValid, setDateisValid] = useState(false);
    const [dateIsTouched, setIsDateisTouched] = useState(false);
    const [guests, setGuests] = useState('');
    const [guestsisValid, setGuestsisValid] = useState(false);
    const [guestsIsTouched, setIsGuestsisTouched] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const dataChangeHandler = (event) => {
        setDate(event.target.value);
        const CheckDate = new Date(event.target.value).toString() !== 'Invalid Date';
        setDateisValid(CheckDate);

        // console.log(dateisValid);
        // console.log(date);
    }

    const guestsChangeHandler = (event) => {
        setGuests(event.target.value);
        console.log(event.target.value)

        const CheckGuests = event.target.value >= 1 && event.target.value <= 10;
        setGuestsisValid(CheckGuests);
        // console.log(guests);
        // console.log(guestsisValid);
    };

    const guestsBlurHandler = (event) => {
        setIsGuestsisTouched(true);
    }

    const dateBlurHandler = (event) => {
        setIsDateisTouched(true);
    }

    let formdisable = true;

    // console.log(dateisValid);
    // console.log(guestsisValid);
    if (dateisValid && guestsisValid && !isLoading) {
        formdisable = false;
    }

    const DatetouchAndinValid = !dateisValid && dateIsTouched;

    const dateClass = DatetouchAndinValid ? 'form-control text-dark fs-4 border-2 border-danger' : 'form-control text-dark fs-4';

    const GueststouchAndinValid = !guestsisValid && guestsIsTouched;

    const guestsClass = GueststouchAndinValid ? 'form-control text-dark fs-4 border-2 border-danger' : 'form-control text-dark fs-4';

    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setDate('');
            setGuests('');
            setIsGuestsisTouched(false);
            setIsDateisTouched(false);
            setDateisValid(false);
            setGuestsisValid(false);
        }, 1000);
    }
    console.log(isLoading)
    const buttonload = !isLoading ?
        'Book Now' : <div class="spinner-border text-dark" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>

    return (
        <Fragment >
            <section className=' bg-secondary  ' >
                <h2 className='pt-7  text-center fw-bold '>Welcome to  </h2>
                <h1 className=' text-center text-primary '>The Little Lemon </h1>
                <h2 className='  text-center fw-bold '>Reservation Table </h2>
                <form onSubmit={submitHandler} className='form-control pt-4 pb-5 text-dark  d-flex vstack gap-3 bg-secondary container border-0  fs-3  fw-semibold w-50 needs-validation   ' >
                    <label htmlFor="res-date " className=' form-label'  >Choose date</label>
                    <input type="date" id="res-date" min='15-1-2009' value={date} onChange={dataChangeHandler} onBlur={dateBlurHandler} placeholder='Date' className={dateClass} />
                    {DatetouchAndinValid && <p className='text-danger fs-5'>Please Place a Date!</p>}
                    <label htmlFor="res-time" className=' form-label' >Choose time</label>
                    <select id="res-time " className='form-select text-dark fs-5'>
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                        <option>22:00</option>
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number" id="guests" onChange={guestsChangeHandler} onBlur={guestsBlurHandler} className={guestsClass} value={guests} />
                    {GueststouchAndinValid && <p className='text-danger fs-5'>Please Place The Number of Guests Between 1 and 10</p>}
                    <label htmlFor="occasion" >Occasion</label>
                    <select id="occasion" className='form-select text-dark fs-5'>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    <button type='submit' className='btn btn-primary border-1 border border-dark mt-5 fs-4 ' disabled={formdisable} >{buttonload}</button>
                </form  >
            </section>

        </Fragment>

    )
}
export default Form;
