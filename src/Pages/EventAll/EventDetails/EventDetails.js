import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Box, Grid, } from "@mui/material";

const EventDetails = () => {
  const { eventId } = useParams()
  const [matchEvent, setMatchEvent] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        const event = data.find(ev => ev._id === eventId)
        setMatchEvent(event)
      });
  }, [eventId]);

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid className='my-5' item xs={6}>
            <img className='mx-5' src={matchEvent.banner} alt="" height="400px" />
            <h2 className='mx-5 my-3 text-primary'>{matchEvent.title}</h2>
            <h5 className='mx-5 '>{matchEvent.date}</h5>
            <p className='mx-5 mb-4' style={{ width: "400px" }}>{matchEvent.desc}</p>
            <Link to={`/events/register/${matchEvent._id}`}>
              <button className="btn btn-primary mx-5">Event  Register</button>
            </Link>
            <Link to={`/donation/${matchEvent._id}`}>
              <button className="btn btn-warning">Donate Money</button>
            </Link>
          </Grid>
          <Grid item xs={6} style={{ borderLeft: "1px solid lightGray" }}>
            <img className="m-5" src="https://i.ibb.co/9Wcs4Db/Volunteering-bro.png" alt="" height="700px" />
          </Grid>
        </Grid>
      </Box>

    </div>
  );
};

export default EventDetails;