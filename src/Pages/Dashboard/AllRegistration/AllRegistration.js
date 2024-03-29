import React, { useEffect, useState } from "react";
import RegistrationTable from "../RegistrationTable/RegistrationTable";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Grid } from "@mui/material";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Shared/Loading/Loading";

const AllRegistration = () => {
  const { token, isLoading } = useAuth();
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch("https://sheccha-shebok-server.vercel.app/register", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRegistrations(data);
      });
  }, [token]);

  if (isLoading || !registrations.length) {
    return <Loading />;
  }

  //DELETE Registration
  const handleDelete = (registration) => {
    const deleteData = window.confirm("Are you sure you want to delete?");
    if (deleteData) {
      fetch(
        `https://sheccha-shebok-server.vercel.app/register/${registration._id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const userRemainingEvents = registrations.filter(
              (userEvent) => userEvent._id !== registration._id
            );
            setRegistrations(userRemainingEvents);
            toast.success(`${registration.title} is deleted successfully`);
          }
        });
    } else {
      toast.error(`${registration.title} not deleted`);
    }
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid
          className="d-flex"
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="left">First Name</TableCell>
                    <TableCell align="left">Registration Date&nbsp;</TableCell>
                    <TableCell align="left">Email ID&nbsp;</TableCell>
                    <TableCell align="left">Change Role&nbsp;</TableCell>
                    <TableCell align="right">Delete&nbsp;</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {registrations.map((registration) => (
                    <RegistrationTable
                      key={registration._id}
                      registration={registration}
                      handleDelete={handleDelete}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    ></RegistrationTable>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
      <ToastContainer />
    </>
  );
};

export default AllRegistration;
