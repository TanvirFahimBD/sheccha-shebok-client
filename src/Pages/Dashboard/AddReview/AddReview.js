import { Alert, Box, Button, Grid, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const AddReview = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const [message, setMessage] = useState("")
    const [review, setReview] = useState("")

    const handleAddReview = (e) => {
        e.preventDefault()
        const reviewNow = {email:user.email, message, review, name: user.displayName, img: user.photoURL, date: new Date().toLocaleDateString()}
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewNow)
        })
            .then(response => response.json())
            .then(data => {
                if(data.insertedId){
                    alert("Review Added Successfully")
                    navigate("/")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }
    // 
    return (
        <div>
            <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img className="m-5" src="https://i.ibb.co/SttPT6s/Online-Review-rafiki.png" alt="" height="700px" />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ my: 8 }} variant="h2" component="h2">
            AddReview
            </Typography>
            <form onSubmit={handleAddReview}>
                <TextField sx={{ width: 300 }}
                    id="standard-basic"
                    label="message"
                    name="message"
                    type="text"
                    onChange={e => setMessage(e.target.value)}
                    variant="filled" required
                />
                <br />
                <br />
                <TextField sx={{ width: 300 }}
                    id="standard-basic"
                    label="review"
                    name="review"
                    type="text"
                    onChange={e => setReview(e.target.value)}
                    variant="filled" required
                />
                <br />
                <br />
                <Button sx={{ width: 300 }} variant="contained" type="submit">Add Review</Button>
            </form>
            </Grid>
        </Grid>
      </Box>
        </div>
    );
};

export default AddReview;