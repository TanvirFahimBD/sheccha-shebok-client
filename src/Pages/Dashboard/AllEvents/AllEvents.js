import React, { useEffect, useState } from "react";
import EventTable from "../EventTable/EventTable";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid } from "@mui/material";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);

  //DELETE Event
  const handleDelete = (event) => {
    const deleteData = window.confirm("Are you sure you want to delete?");
    if (deleteData) {
      fetch(`http://localhost:5000/events/${event._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success(`${event?.title} deleted successfully`);
            const userRemainingEvents = events.filter((userEvent) => userEvent._id !== event._id);
            setEvents(userRemainingEvents);
          }
        });
    } else {
      toast.error(`${event?.title} not deleted`);
    }
  };

  if (!events.length) {
    return <Loading />
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Grid className="d-flex" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
          <h1 className="text-center text-primary">Total {events.length} events going on </h1>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Banner&nbsp;</TableCell>
                  <TableCell align="right">Update&nbsp;</TableCell>
                  <TableCell align="right">Delete&nbsp;</TableCell>
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
      <ToastContainer />
    </Box>
  );
};

export default AllEvents;