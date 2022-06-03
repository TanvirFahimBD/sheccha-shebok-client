import React, { useEffect, useState } from "react";
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

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        console.log(data);
      });
  }, []);

  //DELETE Event
  const handleDelete = (id) => {
    const deleteData = window.confirm("Are you sure you want to delete?");
    if (deleteData) {
      fetch(`http://localhost:5000/events/${id}`, {
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
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Description&nbsp;</TableCell>
              <TableCell align="right">Banner&nbsp;</TableCell>
              <TableCell align="right">Action&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {events.map((event) => <EventTable key={event._id} event={event} handleDelete={handleDelete}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}></EventTable>)}
            
          </TableBody>
        </Table>
      </TableContainer>       
          </Grid>
        </Grid>
      </Box>
      

    </>
  );
};

export default AllEvents;