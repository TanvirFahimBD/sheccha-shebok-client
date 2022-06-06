import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MySingleDonation from '../MySingleDonation/MySingleDonation';
import { Alert, Box, Button, Grid, Typography } from "@mui/material";

const MyDonation = () => {
    const {user} = useAuth()
    const [paymentInfo, setPaymentInfo] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/payment/${user.email || ""}`)
        .then(res => res.json())
        .then(data => {
          setPaymentInfo(data);
        })
      }, [])
    return (
      <div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          
          <Grid item xs={6} style={{borderRight: "1px solid lightGray"}}>
            {paymentInfo.map(pay =><MySingleDonation pay={pay} key={pay._id}></MySingleDonation>)}
            </Grid>
            <Grid item xs={6}>
            <img className="m-5" src="https://i.ibb.co/L97STdF/Charity-bro.png" alt="" height="700px" />
          </Grid>
        </Grid>
      </Box>
    </div>
    );
};

export default MyDonation;