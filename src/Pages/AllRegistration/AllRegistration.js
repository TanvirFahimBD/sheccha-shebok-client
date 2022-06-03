import React, { useEffect, useState } from 'react';
import RegistrationTable from '../RegistrationTable/RegistrationTable';
import EventTable from "../EventTable/EventTable";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ClassNames } from "@emotion/react";
import { Box, Grid } from "@mui/material";

const AllRegistration = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/register")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEvents(data);
            })
    }, [])

        //DELETE Registration
  const handleDelete = (id) => {
    const deleteData = window.confirm("Are you sure you want to delete?");
    if (deleteData) {
      fetch(`http://localhost:5000/register/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.deletedCount) {
            alert("The data is deleted successfully");
            const userRemainingEvents = events.filter((userEvent) => userEvent._id !== id);
            setEvents(userRemainingEvents);
          }
        });
    } else {
      alert("The data is not deleted");
    }
  };
    

    return (
      <>
      <Box  sx={{ width: '100%' }}>
          <Grid  className="d-flex" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={4}>
              <img className="mb-5" src="https://i.ibb.co/cy4ghxM/Events-rafiki.png" alt="" height="600px" width="400px" />
            </Grid>
            <Grid item xs={8}>
            <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Email ID&nbsp;</TableCell>
              <TableCell align="right">Registration Date&nbsp;</TableCell>
              <TableCell align="right">Volunteer List&nbsp;</TableCell>
              <TableCell align="right">Action&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>

                    {events.map(event => <RegistrationTable key={event._id} event={event} handleDelete={handleDelete}></RegistrationTable> )}
                    </TableRow>
          </TableBody>
        </Table>
      </TableContainer>       
          </Grid>
        </Grid>
      </Box>
      

    </>
    );
};

export default AllRegistration;