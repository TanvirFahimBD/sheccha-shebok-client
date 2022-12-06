import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import useAuth from "../../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventRegisterRoleUpdate = () => {
  const { token } = useAuth();
  const { singleEventId } = useParams();
  const [event, setEvent] = useState({});

  //Get Current Event Info
  useEffect(() => {
    fetch(`http://localhost:5000/register/${singleEventId}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, [singleEventId]);

  const handleRole = (e) => {
    const role = e.target.value;
    const newEvent = { ...event }
    newEvent.role = role;
    setEvent(newEvent)
    e.preventDefault();
  }

  const handleEditRole = (e) => {
    fetch("http://localhost:5000/users/role", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      },
      body: JSON.stringify(event)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          toast.success(`${event.email} role ${event?.role} added Successfully`)
        } else {
          toast.error(`${event.email} role not changed`)
        }
      });
    e.preventDefault();
    e.target.reset()
  };

  return (
    <div> <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className="text-center my-4" item xs={6}>
          <Typography sx={{ my: 8 }} variant="h2" component="h2">
            Add <span className="text-primary">Role</span>
          </Typography>
          <form onSubmit={handleEditRole}>
            <InputLabel id="role">Role</InputLabel>
            <Select className="w-25"
              labelId="role-select"
              id="role-select"
              label="Role Select"
              value={event.role}
              onChange={handleRole}
            >
              <MenuItem value="volunteer">Volunteer</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </Select>
            <br />
            <br />
            <TextField sx={{ width: 300 }}
              id="email"
              label="Email"
              name="email"
              type="text"
              value={event.email || ""}
              variant="filled" readOnly
            />
            <br />
            <br />
            <TextField sx={{ width: 300 }}
              id="title"
              label="Title"
              name="title"
              type="text"
              value={event.title || ""}
              variant="filled" readOnly
            />
            <br />
            <br />
            <TextField sx={{ width: 300 }}
              id="date"
              label="Date"
              name="date"
              type="text"
              value={event.date || ""}
              variant="filled" readOnly
            />
            <br />
            <br />
            <Button sx={{ width: 300 }} variant="contained" type="submit">Add Role</Button>
          </form>
        </Grid>
        <Grid item xs={6}>
          <img className="m-5" src="https://i.ibb.co/HzwHNDJ/Calendar-rafiki.png" alt="" height="700px" />
        </Grid>
      </Grid>
    </Box>
      <ToastContainer />
    </div>
  );
};

export default EventRegisterRoleUpdate;