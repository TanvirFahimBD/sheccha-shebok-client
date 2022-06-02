import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink } from "react-router-dom";

const Register = () => {
    const { signInUsingGoogle, user } = useAuth();
    // const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({})
  
    const handleOnChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...registerData}
      newLoginData[field] = value;
      setRegisterData(newLoginData)
      console.log(newLoginData);
    }
  
    const handleGoogleSignIn = () => {
      signInUsingGoogle()
      // if(user?.email){
      //   navigate("/")
      // }
    }
  
    const handleRegisterSubmit = (e) => {
        if(registerData.password != registerData.confirmPassword){
            alert("Password not matched")
            return;
        }
        else{
            alert("Password matched")

        }
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
            <form onSubmit={handleRegisterSubmit}>
              <TextField sx={{ width: 300 }}
               id="standard-basic"
                label="Email"
                 variant="standard"
              name="email"
              type="email"
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
              <TextField sx={{ width: 300 }}
                id="filled-password-input"
                label="Re-type Password"
                type="password"
                autoComplete="current-password"
                variant="filled"
                name="confirmPassword"
              onChange={handleOnChange}
              />
              <br />
              <br />
              
              <Button sx={{ width: 300 }} variant="contained" type="submit">Register</Button>
            </form>
            <Button sx={{ width: 300 }} className="mt-5" variant="contained" onClick={handleGoogleSignIn}><GoogleIcon className="mx-4" /> Sign In With Google</Button>
            <br />
              <br />
            <p>Already a User?<NavLink style={{textDecoration: "none"}} to="/login"> Login</NavLink></p>
              
          </Grid>

          <Grid item xs={6}>
            <img src="https://i.ibb.co/Wp80CQ0/Sign-up-rafiki.png" alt=""  height="700px" />
          </Grid>
        </Grid>
      </Box> 
        </div>
    );
};

export default Register;