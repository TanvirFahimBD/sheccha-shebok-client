import axios from "axios";
import TextField from '@mui/material/TextField';
import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const AddEvent = () => {
  const [index, setIndex] = useState('')
  const [key, setKey] = useState('')
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [banner, setBanner] = useState('')
  const [date, setDate] = useState('')

  const handleAdd = (e) => {
    const newEvent = { index, key, title, desc, banner, date };
    axios.post("https://sheccha-shebok-server.up.railway.app/events", newEvent).then((res) => {
      if (res?.data?.insertedId) {
        toast.success(`${newEvent.title} Added Successfully`);
      }
    });
    e.preventDefault();
    e.target.reset()
  };

  return (
    <div >
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img className="m-5" src="https://i.ibb.co/6wf1Mhh/Events-pana.png" alt="" height="700px" />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ my: 2 }} variant="h2" component="h2">
              <span className="text-primary">Add</span> an <span className="text-primary">Event</span>
            </Typography>
            <form onSubmit={handleAdd}>
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="Event Index"
                name="Event Index"
                type="text"
                onBlur={(e) => setIndex(e.target.value)}
                variant="filled"
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="Event Key "
                name="Event Key"
                type="text"
                onBlur={(e) => setKey(e.target.value)}
                variant="filled"
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="Event Title"
                name="Event Title"
                type="text"
                onBlur={(e) => setTitle(e.target.value)}
                variant="filled"
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="Description"
                name="Description"
                type="text"
                onBlur={(e) => setDesc(e.target.value)}
                variant="filled"
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="Banner URL"
                name="Banner URL"
                type="text"
                onBlur={(e) => setBanner(e.target.value)}
                variant="filled"
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                id="standard-basic"
                label="Event Date"
                name="Event Date"
                type="text"
                onBlur={(e) => setDate(e.target.value)}
                variant="filled"
              />
              <br />
              <br />
              <Button sx={{ width: 300 }} variant="contained" type="submit">Add Event</Button>
            </form>
          </Grid>
        </Grid>
      </Box>
      <ToastContainer />
    </div>
  );
};

export default AddEvent;
