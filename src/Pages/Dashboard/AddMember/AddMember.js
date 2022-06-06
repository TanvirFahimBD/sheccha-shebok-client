import { Alert, Box, Button, Grid, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const AddMember = () => {
    const navigate = useNavigate()
    const [index, setIndex] = useState("")
    const [key, setKey] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [date, setDate] = useState("")
    const [desc, setDesc] = useState("")
    const [title, setTitle] = useState("")
    const [banner, setBanner] = useState(null)
    const [image, setImage] = useState(null)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const handleAddVolunteer = (e) => {
        e.preventDefault()
        console.log("working")
        const pattern = /\S+@\S+\.\S+/;
        if (!pattern.test(email)) {
            setSuccess("")
            setError("Enter proper email")
        }
        if (!banner || !image) {
            setError("Please add an image")
        }

        const formData = new FormData()
        formData.append("index", index)
        formData.append("key", key)
        formData.append("name", name)
        formData.append("email", email)
        formData.append("date", date)
        formData.append("desc", desc)
        formData.append("title", title)
        formData.append("banner", banner)
        formData.append("image", image)

        fetch('http://localhost:5000/teamMembers', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => {
                if(result.insertedId){
                    alert("New Member Added Successfully")
                    navigate("/")
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }


    return (
        <div>
            <h1>Add a Member</h1>
            <form onSubmit={handleAddVolunteer}>
                <TextField sx={{ width: 300 }}
                    id="standard-basic"
                    label="index"
                    name="index"
                    type="text"
                    onChange={e => setIndex(e.target.value)}
                    variant="filled" required
                />
                <br />
                <br />
                <TextField sx={{ width: 300 }}
                    id="standard-basic"
                    label="key"
                    name="key"
                    type="text"
                    onChange={e => setKey(e.target.value)}
                    variant="filled" required
                />
                <br />
                <br />
                
                <TextField sx={{ width: 300 }}
                    id="standard-basic"
                    label="date"
                    name="date"
                    type="text"
                    onChange={e => setDate(e.target.value)}
                    variant="filled" required
                />
                <br />
                <br />
                <TextField sx={{ width: 300 }}
                    id="standard-basic"
                    label="desc"
                    name="desc"
                    type="text"
                    onChange={e => setDesc(e.target.value)}
                    variant="filled" required
                />
                <br />
                <br />
                <TextField sx={{ width: 300 }}
                    id="standard-basic"
                    label="title"
                    name="title"
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                    variant="filled" required
                />
                <br />
                <br />
                <TextField sx={{ width: 300 }}
                    id="standard-basic"
                    label="name"
                    name="name"
                    type="text"
                    onChange={e => setName(e.target.value)}
                    variant="filled" required
                />
                <br />
                <br />
                <TextField sx={{ width: 300 }}
                    id="standard-basic"
                    label="Email"
                    name="email"
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    variant="filled" required
                />
                <br />
                <br />
                <label htmlFor="bannerImage">Banner Image</label>
                <br />
                <Input accept="image/*" type="file"
                    onChange={e => setBanner(e.target.files[0])}
                />
                <br />
                <br />
                <label htmlFor="profileImage">Profile Image</label>
                <br />
                <Input accept="image/*" type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <br />
                {/* <Button sx={{ width: 300 }} variant="contained" component="span" type="submit">
                    Add Volunteer
                </Button> */}
                <input type="submit" value="Add Volunteer"  sx={{ width: 300 }}  />
            </form>
            {error && <Alert sx={{ mt: 4, width: "300px" }} severity="error">{error}</Alert>}
            {success && <Alert sx={{ mt: 4, width: "300px" }} severity="success">{success}</Alert>}
        </div>
    );
};

export default AddMember;
