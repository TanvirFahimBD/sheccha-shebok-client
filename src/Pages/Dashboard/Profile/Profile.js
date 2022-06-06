import useAuth from '../../../hooks/useAuth';
import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation, useNavigate} from "react-router-dom";

const Profile = () => {
    const {user} = useAuth()
    const handleProfileUpdate = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img className="m-5" src="https://i.ibb.co/1dTdh1N/Editing-body-text-bro.png" alt="" height="700px" />
          </Grid>
          <Grid item xs={6}  className="text-center">
            <Typography sx={{ my: 8 }} variant="h2" component="h2">
            Edit Profile
            </Typography>
            <img src={user.photoURL} alt="" style={{borderRadius: "100%"}} />
      <form className='mt-3' onSubmit={handleProfileUpdate}>
      <TextField sx={{ width: 300 }}
                 id="standard-basic"
                 label="Name"
                 name="name"
                 type="text"
                 variant="filled"
                 value={user.displayName || ""} readOnly
              />
        <br />
              <TextField sx={{ width: 300 }}
                 id="standard-basic"
                 label="Email"
                 name="email"
                 type="email"
                 variant="filled"
                 value={user.email || ""} readOnly
              />
        <br />
        <TextField sx={{ width: 300 }}
                 id="standard-basic"
                 label="address"
                 name="address"
                 type="text"
                 variant="filled"
                //  onChange={} 
              />
        <br />
        <TextField sx={{ width: 300 }}
                 id="standard-basic"
                 label="age"
                 name="age"
                 type="text"
                 variant="filled"
                //  onChange={} 
              />
        <br />
        <TextField sx={{ width: 300 }}
                 id="standard-basic"
                 label="education"
                 name="education"
                 type="text"
                 variant="filled"
                //  onChange={} 
              />
        <br />
        <TextField sx={{ width: 300 }}
                 id="standard-basic"
                 label="occupation"
                 name="occupation"
                 type="text"
                 variant="filled"
                //  onChange={} 
              />
        <br />
        <br />
        <br />
        <Button sx={{ width: 300 }} variant="contained" type="submit">Update</Button>
      </form>
      </Grid>
        </Grid>
      </Box>
           
        </div>
    );
};

export default Profile;