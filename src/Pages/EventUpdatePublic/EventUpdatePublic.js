import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, Typography } from "@mui/material";

const EventUpdatePublic = () => {
  const { user } = useAuth()
  const { singleEventId } = useParams();
  const [event, setEvent] = useState({});

  //Get Current Event Info
  useEffect(() => {
    fetch(`http://localhost:5000/register/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvent(data[0]);
      });
  }, [user]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    const newEvent = { ...event }
    newEvent.title = newTitle;
    setEvent(newEvent)
    e.preventDefault();
  }

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    const newEvent = { ...event }
    newEvent.date = newDate;
    setEvent(newEvent)
    e.preventDefault();
  }

  const handleDescChange = (e) => {
    const newDesc = e.target.value;
    const newEvent = { ...event }
    newEvent.desc = newDesc;
    setEvent(newEvent)
    e.preventDefault();
  }

  const handleBannerChange = (e) => {
    const newBanner = e.target.value;
    const newEvent = { ...event }
    newEvent.banner = newBanner;
    setEvent(newEvent)
    e.preventDefault();
  }

  const handleEventUpdate = (e) => {
    fetch(`http://localhost:5000/register/${singleEventId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          alert(`${event.title} Updated Successfully`)
        }
      });
    e.preventDefault();
  };

  return (
    <div> <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid className="text-center my-4" item xs={6}>
          <Typography sx={{ my: 8 }} variant="h2" component="h2">
            Publish <span className="text-primary">Event</span>
          </Typography>
          <form onSubmit={handleEventUpdate}>
            <TextField sx={{ width: 300 }}
              id="standard-basic"
              label="title"
              name="title"
              type="text"
              value={event.title || ""}
              onChange={handleTitleChange}
              variant="filled"
            />
            <br />
            <br />
            <TextField sx={{ width: 300 }}
              id="standard-basic"
              label="date"
              name="date"
              type="text"
              value={event.date || ""}
              onChange={handleDateChange}
              variant="filled"
            />
            <br />
            <br />
            <TextField sx={{ width: 300 }}
              id="standard-basic"
              label="desc"
              name="desc"
              type="text"
              value={event.desc || ""}
              onChange={handleDescChange}
              variant="filled"
            />
            <br />
            <br />
            <TextField sx={{ width: 300 }}
              id="standard-basic"
              label="banner"
              name="banner"
              type="text"
              value={event.banner || ""}
              onChange={handleBannerChange}
              variant="filled"
            />
            <br />
            <br />
            <Button sx={{ width: 300 }} variant="contained" type="submit">Publish Event </Button>
          </form>
        </Grid>
        <Grid item xs={6}>
          <img className="m-5" src="https://i.ibb.co/HzwHNDJ/Calendar-rafiki.png" alt="" height="700px" />
        </Grid>
      </Grid>
    </Box>
    </div>
  );
};

export default EventUpdatePublic;