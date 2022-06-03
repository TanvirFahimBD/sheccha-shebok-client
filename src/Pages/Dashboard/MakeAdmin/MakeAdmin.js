import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation, useNavigate} from "react-router-dom";

const MakeAdmin = () => {
    const { setError, error, user } = useAuth();
  const [email, setEmail] = useState({})

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newEmail = { ...email }
    newEmail[field] = value;
    setEmail(newEmail)
    console.log(newEmail);
  }

  const handleAddAdmin = (e) => {
    e.preventDefault()
    const pattern = /\S+@\S+\.\S+/;
    if (!pattern.test(email)) {
      setError("Enter proper email")
    }
  }

    return (
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleAddAdmin}>
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
              <Button sx={{ width: 300 }} variant="contained" type="submit">Log In</Button>
            </form>
            {error && <Alert sx={{mt: 4, width: "300px"}} severity="error">{error}</Alert>}
        </div>
    );
};

export default MakeAdmin;