import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, Typography } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleEventRegister = () => {
  const { user } = useAuth()
  const { singleEventId } = useParams();
  const [event, setEvent] = useState({});

  //Get Current Event Info
  useEffect(() => {
    fetch(`https://sheccha-shebok-server.up.railway.app/events/${singleEventId}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [singleEventId]);

  const handleVolunteerRegister = (e) => {
    e.preventDefault();
    const eventRegister = { index: event.index, key: event.key, name: user.displayName, email: user.email, date: event.date, desc: event.desc, title: event.title, banner: event.banner, image: user.photoURL }

    fetch("https://sheccha-shebok-server.up.railway.app/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventRegister),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success('Successfully registered');
        }
      });
  };

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img className="m-5" src="https://i.ibb.co/cy4ghxM/Events-rafiki.png" alt="" height="700px" />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ my: 8 }} variant="h2" component="h2">
              Register as a Volunteer
            </Typography>
            <form onSubmit={handleVolunteerRegister}>
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="Name"
                name="name"
                type="text"
                variant="filled"
                value={user.displayName || ""} readOnly
              />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="Email"
                name="email"
                type="email"
                variant="filled"
                value={user.email || ""} readOnly
              />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="photo"
                name="photo"
                type="text"
                variant="filled"
                value={user.photoURL || ""} readOnly
              />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="date"
                name="date"
                type="text"
                variant="filled"
                value={event?.date || ""} readOnly
              />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="desc"
                name="desc"
                type="text"
                variant="filled"
                value={event?.desc || ""} readOnly
              />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="title"
                name="title"
                type="text"
                variant="filled"
                value={event?.title || ""} readOnly
              />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="banner"
                name="banner"
                type="text"
                variant="filled"
                value={event?.banner || ""} readOnly
              />
              <br />
              <br />
              <Button sx={{ width: 300 }} variant="contained" type="submit">Register</Button>
            </form>
          </Grid>
        </Grid>
      </Box>
      <ToastContainer />
    </div>
  );
};

export default SingleEventRegister;
