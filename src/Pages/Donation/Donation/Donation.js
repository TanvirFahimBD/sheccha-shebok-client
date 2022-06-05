import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Donation = () => {
    const [amount, setAmount] = useState(30)
    const stripePromise = loadStripe('pk_test_51L6u7WFgsutIdwUugeM7fMavghMBwUs855h9IHnQ3hmApyvT3zYHbc2n2tZyg5nouYvbnDrPfU1z8k0NQivmQJ0I00NRC61XhE')

    const { eventId } = useParams()
    const { user } = useAuth()
    const [currentDonation, setCurrentDonation] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/events")
            .then(res => res.json())
            .then(data => {
                const match = data.find(dt => dt._id === eventId)
                setCurrentDonation(match)
            })
    }, [])

    return (
        <div>
                <p>{user.email}</p>
                <p>{currentDonation.title}</p>
            {amount && <Elements stripe={stripePromise}>
                <CheckoutForm currentDonation={currentDonation} amount={amount}/>
            </Elements>}
        </div>
    );
};

export default Donation;