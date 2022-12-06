import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from "react-router-dom";

const Login = () => {
  const { signInUsingGoogle, loginUser, setError, error, user } = useAuth();
  const [loginData, setLoginData] = useState({})

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData }
    newLoginData[field] = value;
    setLoginData(newLoginData)
  }

  const handleGoogleLogin = (e) => {
    signInUsingGoogle()
    e.preventDefault()
  }
  const handleLoginSubmit = (e) => {
    e.preventDefault()

    const pattern = /\S+@\S+\.\S+/;

    if (loginData.password.length < 6) {
      setError("Password length must be greater than 5 character")
    }
    else if (!pattern.test(loginData.email)) {
      setError("Enter proper email")
    }
    loginUser(loginData.email, loginData.password)
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img className="m-5" src="https://i.ibb.co/GFRRrh2/Privacy-policy-rafiki.png" alt="" height="700px" />
          </Grid>
          <Grid className='text-center' item xs={6}>
            <Typography sx={{ my: 8 }} variant="h2" component="h2">
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="Email"
                name="email"
                type="email"
                onBlur={handleOnChange}
                variant="filled"
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
                onBlur={handleOnChange}
              />
              <br />
              <br />
              <Button sx={{ width: 300 }} variant="contained" type="submit">Log In</Button>
            </form>
            <p className="mt-4">New User?<NavLink style={{ textDecoration: "none" }} to="/register"> Create a account</NavLink></p>
            <p className="mt-4"> -------------------- OR--------------------</p>
            <Button sx={{ width: 300 }} className="mt-3 p-2" variant="contained" onClick={handleGoogleLogin}><GoogleIcon className="mx-4" /> Continue With Google</Button>
            {error && <p className="text-center text-danger my-4" sx={{ mt: 4, width: "300px" }} severity="error">{error}</p>}
            {user?.email && <p className="text-center text-success my-3" sx={{ mt: 4, width: "300px" }} severity="success">Login Successful</p>}
            <br />
            <br />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
