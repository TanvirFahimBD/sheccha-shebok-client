import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Notice from "../Notice/Notice";

// todo - show notices also date

const Notices = () => {
  const [notices, setNotices] = useState([])

  useEffect(() => {
    fetch('https://sheccha-shebok-server.up.railway.app/notices')
      .then(response => response.json())
      .then(data => {
        setNotices(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, [])

  return (

    <div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography sx={{ my: 2 }} variant="h3" component="h2">
              <NotificationsActiveIcon className="fs-1 my-4" /> Total {notices?.length} Notices
            </Typography>
            {notices.map(notice => <Notice notice={notice} key={notice._id} ></Notice>)}
          </Grid>
          <Grid item xs={6}>
            <img className="m-5" src="https://i.ibb.co/WHzHWTR/New-message-bro.png" alt="" height="700px" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Notices;