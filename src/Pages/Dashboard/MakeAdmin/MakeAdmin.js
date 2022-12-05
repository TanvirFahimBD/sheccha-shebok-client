import { Alert, Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const MakeAdmin = () => {
    const { token } = useAuth();
    const [email, setEmail] = useState({})
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newEmail = { ...email }
        newEmail[field] = value;
        setEmail(newEmail)
        // console.log(newEmail);
    }

    const handleAddAdmin = (e) => {
        e.preventDefault()
        const pattern = /\S+@\S+\.\S+/;
        if (!pattern.test(email)) {
            setSuccess("")
            setError("Enter proper email")
        }
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "authorization": `Bearer ${token}`,
                "content-type": "application/json"
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    setError("")
                    setSuccess("Admin Added Successfully")

                }
            })
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <img className="m-5" src="https://i.ibb.co/Lrq12RF/Admin-pana.png" alt="" height="700px" />
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{ my: 8 }} variant="h2" component="h2">
                        Make an <span className="text-primary">Admin</span>
                    </Typography>
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
                        <Button sx={{ width: 300 }} variant="contained" type="submit">Add Admin</Button>
                    </form>
                    {error && <Alert sx={{ mt: 4, width: "300px" }} severity="error">{error}</Alert>}
                    {success && <Alert sx={{ mt: 4, width: "300px" }} severity="success">{success}</Alert>}
                </Grid>
            </Grid>
        </Box>

    );
};

export default MakeAdmin;