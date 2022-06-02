import { Alert, Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from "react-router-dom";

const Register = () => {
  const { signInUsingGoogle, registerUser, setError, error, user } = useAuth();
  const navigate = useNavigate()
  const [registerData, setRegisterData] = useState({})

  const handleOnChange = (e) => {
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
      registerUser(registerData.email, registerData.password)
      // navigate("/")
   
    e.preventDefault()
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid className="mx-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography sx={{ my: 8 }} variant="h2" component="h2">
              Register
            </Typography>
            {user?.email && <CircularProgress /> }
            <br />
            <form onSubmit={handleRegisterSubmit}>
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="Email"
                name="email"
                type="email"
                onChange={handleOnChange}
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
                onChange={handleOnChange}
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
                onChange={handleOnChange}
              />
              <br />
              <br />

              <Button sx={{ width: 300 }} variant="contained" type="submit" onClick={handleRegisterSubmit}>Register</Button>
            </form>
            {error && <Alert sx={{mt: 4, width: "300px"}} severity="error">{error}</Alert>}
            {user?.email && <Alert sx={{mt: 4, width: "300px"}} severity="success">Registration Successful</Alert>}
            
            <Button sx={{ width: 300 }} className="mt-4" variant="contained" onClick={signInUsingGoogle}><GoogleIcon className="mx-4" /> Sign In With Google</Button>
            <br />
            <br />
            <p>Already a User?<NavLink style={{ textDecoration: "none" }} to="/login"> Login</NavLink></p>


          </Grid>

          <Grid item xs={6}>
            <img src="https://i.ibb.co/Wp80CQ0/Sign-up-rafiki.png" alt="" height="700px" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Register;