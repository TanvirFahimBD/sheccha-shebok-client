import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from "react-router-dom";

const Login = () => {
  const { signInUsingGoogle, user } = useAuth();
  // const navigate = useNavigate()
  const [loginData, setLoginData] = useState({})

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData}
    newLoginData[field] = value;
    setLoginData(newLoginData)
    console.log(newLoginData);
  }

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
    // if(user?.email){
    //   navigate("/")
    // }
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img className="m-5" src="https://i.ibb.co/RB6XrsJ/Tablet-login-bro.png" alt="" height="700px" />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ my: 8 }} variant="h2" component="h2">
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField sx={{ width: 300 }} id="standard-basic" label="Email" variant="standard"
              name="email"
              onChange={handleOnChange}
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                name="password"
              onChange={handleOnChange}
              />
              <br />
              <br />
              
              <Button sx={{ width: 300 }} variant="contained" type="submit">Log In</Button>
            </form>
            <Button sx={{ width: 300 }} className="mt-5" variant="contained" onClick={handleGoogleSignIn}><GoogleIcon className="mx-4" /> Sign In With Google</Button>
            <br />
              <br />
            <p>New User?<NavLink style={{textDecoration: "none"}} to="/register"> Create a account</NavLink></p>
              
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
