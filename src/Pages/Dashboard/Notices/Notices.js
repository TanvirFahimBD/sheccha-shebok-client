import { Alert, Box, Button, Grid, Input, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
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
            <h1>Notices: {notices?.length}</h1>
            {notices.map(notice=> <Notice notice={notice} key={notice._id} ></Notice>)}
        </div>
    );
};

export default Notices;