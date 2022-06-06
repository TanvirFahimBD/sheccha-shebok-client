import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";

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
            <Box   className="my-5" sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <img className="m-5" src="https://i.ibb.co/cy4ghxM/Events-rafiki.png" alt="" height="700px" />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography sx={{ my: 8 }} variant="h2" component="h2">
                            Make Payment
                        </Typography>
                        <TextField sx={{ width: 400 }}
                            id="standard-basic"
                            label="email"
                            name="email"
                            type="email"
                            variant="filled"
                            value={user.email || ""} readOnly
                        />
                        <br />
                        <TextField sx={{ width: 400 }}
                            id="standard-basic"
                            label="title"
                            name="title"
                            type="text"
                            variant="filled"
                            value={currentDonation.title || ""} readOnly
                        />
                        <br />
                        <br />
                        <br />
                        {amount && <Elements stripe={stripePromise}>
                            <CheckoutForm amount={amount} currentDonation={currentDonation} />
                        </Elements>}
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Donation;