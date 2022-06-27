import axios from "axios";
import TextField from '@mui/material/TextField';
import React, { useRef } from "react";
import { Alert, Box, Button, Grid, Typography } from "@mui/material";

const AddEvent = () => {
  const indexRef = useRef();
  const keyRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const bannerRef = useRef();
  const dateRef = useRef();

  const handleAdd = (e) => {
    const index = indexRef.current.value;
    const key = keyRef.current.value;
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const banner = bannerRef.current.value;
    const date = dateRef.current.value;
    const newEvent = { index, key, title, desc, banner, date };
    axios.post("https://tranquil-cliffs-23009.herokuapp.com/events", newEvent).then((res) => {
      if (res?.data?.insertedId) {
        alert("Event Added Successfully");
        e.target.reset();
      }
    });
    e.preventDefault();
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
                 ref={indexRef}
                 variant="filled"
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                 id="standard-basic"
                 label="Event Key "
                 name="Event Key"
                 type="text"
                 ref={keyRef}
                 variant="filled"
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                 id="standard-basic"
                 label="Event Title"
                 name="Event Title"
                 type="text"
                 ref={titleRef}
                 variant="filled"
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                 id="standard-basic"
                 label="Description"
                 name="Description"
                 type="text"
                 ref={descRef}
                 variant="filled"
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                 id="standard-basic"
                 label="Banner URL"
                 name="Banner URL"
                 type="text"
                 ref={bannerRef}
                 variant="filled"
              />
              <br />
              <br />
              <TextField sx={{ width: 300 }}
                 id="standard-basic"
                 label="Event Date"
                 name="Event Date"
                 type="text"
                 ref={dateRef}
                 variant="filled"
              />
              <br />
              <br />
              <Button sx={{ width: 300 }} variant="contained" type="submit">Add Event</Button>
            </form>
            </Grid>
        </Grid>
        </Box>                         
    </div>


                                    

  );
};

export default AddEvent;
