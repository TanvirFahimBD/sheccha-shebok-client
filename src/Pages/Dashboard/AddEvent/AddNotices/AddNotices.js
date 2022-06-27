import { Alert, Box, Button, Grid, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const AddNotices = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const [notice, setNotice] = useState("")


    const handleAddNotice = (e) => {
        e.preventDefault()
        const date = new Date().toLocaleTimeString()
        // console.log(date)
        const reviewNow = { email: user.email, notice, name: user.displayName, img: user.photoURL, date }
        fetch('https://tranquil-cliffs-23009.herokuapp.com/notices', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewNow)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Notice Added Successfully")
                    navigate("/dashboard/notices")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography sx={{ my: 8 }} variant="h2" component="h2">
                        Add <span className="text-primary"> Notice</span>  
                        </Typography>
                        
                        <form onSubmit={handleAddNotice}>
                            <TextField sx={{ width: 300 }}
                                id="standard-basic"
                                label="notice"
                                name="notice"
                                type="text"
                                onChange={e => setNotice(e.target.value)}
                                variant="filled" required
                            />
                            <br />
                            <br />
                            <Button sx={{ width: 300 }} variant="contained" type="submit">Add Notice</Button>
                        </form>
                    </Grid>
                    <Grid item xs={6} style={{borderLeft: "1px solid lightGray"}}>
                        <img className="m-5" src="https://i.ibb.co/WHzHWTR/New-message-bro.png" alt="" height="700px" />
                    </Grid>
                </Grid>
            </Box>

        </div>
    );
};

export default AddNotices;