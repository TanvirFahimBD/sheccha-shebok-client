import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MySingleDonation from '../MySingleDonation/MySingleDonation';
import { Box, Grid } from "@mui/material";

const MyDonation = () => {
  const { user } = useAuth()
  const [paymentInfo, setPaymentInfo] = useState([])

  useEffect(() => {
    fetch(`https://sheccha-shebok-server.up.railway.app/payment/${user.email || ""}`)
      .then(res => res.json())
      .then(data => {
        setPaymentInfo(data);
      })
  }, [user])

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} style={{ borderRight: "1px solid lightGray" }}>
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {paymentInfo.map(pay => <MySingleDonation pay={pay} key={pay._id}></MySingleDonation>)}
              </Grid>
            </Box>
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