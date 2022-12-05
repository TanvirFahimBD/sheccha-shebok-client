import { Alert, Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation } from "react-router-dom";

const Register = () => {
  const { signInUsingGoogle, registerUser, setError, error, user } = useAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const redirect_uri = location?.state?.from || "/"
  const [registerData, setRegisterData] = useState({})

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...registerData }
    newLoginData[field] = value;
    setRegisterData(newLoginData)
    // console.log(newLoginData);
  }

  const handleRegisterSubmit = (e) => {
    const pattern = /\S+@\S+\.\S+/;
    if (registerData.password !== registerData.confirmPassword) {
      setError("Password not matched")
      return;
    }
    else if (registerData.password.length < 6) {
      setError("Password length must be greater than 5 character")
    }
    else if (!pattern.test(registerData.email)) {
      setError("Enter proper email")
    }
    registerUser(registerData.email, registerData.password, registerData.name, registerData.profileImage)

    e.preventDefault()
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid className="mx-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography sx={{ mt: 8 }} variant="h2" component="h2">
              Register
            </Typography>
            <br />
            <form onSubmit={handleRegisterSubmit}>
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="Name"
                name="name"
                type="text"
                onBlur={handleOnBlur}
                variant="filled"
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic2"
                label="Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
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
                onBlur={handleOnBlur}
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                id="filled-password-input2"
                label="Re-type Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                name="confirmPassword"
                onBlur={handleOnBlur}
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic3"
                label="Profile Image"
                type="text"
                variant="filled"
                name="profileImage"
                onBlur={handleOnBlur}
              />
              <br />
              <br />
              <Button sx={{ width: 300 }} variant="contained" type="submit" onClick={handleRegisterSubmit}>Register</Button>
            </form>
            <p className="mt-4">------------Or Continue Us With------------</p>
            {error && <Alert sx={{ mt: 4, width: "300px" }} severity="error">{error}</Alert>}
            {user?.email && <Alert sx={{ mt: 4, width: "300px" }} severity="success">Registration Successful</Alert>}
            <Button sx={{ width: 300 }} className="mt-3" variant="contained" onClick={signInUsingGoogle}><GoogleIcon className="mx-4" /> Continue With Google</Button>
            <br />
            <br />
            <p>Already a User?<NavLink style={{ textDecoration: "none" }} to="/login"> Login</NavLink></p>
          </Grid>
          <Grid item xs={6}>
            <img src="https://i.ibb.co/Vj0SM8d/Forgot-password-rafiki.png" alt="" height="700px" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Register;