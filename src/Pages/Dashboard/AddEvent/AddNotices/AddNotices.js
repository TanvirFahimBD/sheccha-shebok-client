import { Alert, Box, Button, Grid, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const AddNotices = () => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const [notice, setNotice] = useState("")

    
    const handleAddNotice = (e) => {
        e.preventDefault()
        const date = new Date().toLocaleTimeString()
        // console.log(date)
        const reviewNow = {email:user.email, notice, name: user.displayName, img: user.photoURL, date}
        fetch('http://localhost:5000/notices', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewNow)
        })
            .then(response => response.json())
            .then(data => {
                if(data.insertedId){
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
             <h1>Add notice</h1>
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
                <input type="submit" value="Add Notice"  sx={{ width: 300 }}  />
            </form>
        </div>
    );
};

export default AddNotices;