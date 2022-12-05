import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// todo - send notice with date

const AddNotices = () => {
    const { user } = useAuth()
    const [notice, setNotice] = useState("")

    const handleAddNotice = (e) => {
        e.preventDefault()
        const date = new Date().toLocaleTimeString()
        const reviewNow = { email: user.email, notice, name: user.displayName, img: user.photoURL, date }
        fetch('http://localhost:5000/notices', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewNow)
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Notice Added Successfully")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        e.target.reset()
    }

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid className="ms-5" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Typography sx={{ my: 8 }} variant="h2" component="h2">
                            Add <span className="text-primary"> Notice</span>
                        </Typography>

                        <form onSubmit={handleAddNotice}>
                            <TextField sx={{ width: 300 }}
                                id="standard-basic"
                                label="Write Notice here "
                                name="notice"
                                type="text"
                                onChange={e => setNotice(e.target.value)}
                                variant="filled" required
                            />
                            <br />
                            <br />
                            <Button sx={{ width: 300 }} variant="contained" type="submit">Publish Notice</Button>
                        </form>
                    </Grid>
                    <Grid item xs={6} style={{ borderLeft: "1px solid lightGray" }}>
                        <img className="m-5" src="https://i.ibb.co/WHzHWTR/New-message-bro.png" alt="" height="700px" />
                    </Grid>
                </Grid>
            </Box>
            <ToastContainer />
        </div>
    );
};

export default AddNotices;