import { Alert, Box, Button, Grid, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Notice from "../Notice/Notice";

const Notices = () => {
    const [notices, setNotices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/notices')
            .then(response => response.json())
            .then(data => {
                setNotices(data)
                console.log(data)
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
          <Typography sx={{ my: 2 }} variant="h2" component="h2">
          <NotificationsActiveIcon/> {notices?.length}
            </Typography>
            {notices.map(notice=> <Notice notice={notice} key={notice._id} ></Notice>)}
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