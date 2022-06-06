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
        const reviewNow = {email:user.email, message, review, name: user.displayName, img: user.photoURL }
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
    return (
        <div>
            <h1>AddReview</h1>
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
                <input type="submit" value="Add Review"  sx={{ width: 300 }}  />
            </form>
        </div>
    );
};

export default AddReview;