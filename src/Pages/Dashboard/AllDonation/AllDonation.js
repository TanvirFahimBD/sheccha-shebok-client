import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid } from "@mui/material";
import SingleDonation from './SingleDonation';
import useAuth from '../../../hooks/useAuth';

const AllDonation = () => {
    const { user } = useAuth()
    const [paymentInfo, setPaymentInfo] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/payment")
            .then(res => res.json())
            .then(data => {
                setPaymentInfo(data);
            })
    }, [user])

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid className="d-flex" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Amount</TableCell>
                                        <TableCell align="left">Transaction&nbsp;</TableCell>
                                        <TableCell align="left">Email ID&nbsp;</TableCell>
                                        <TableCell align="left">Event&nbsp;</TableCell>
                                        <TableCell>Date</TableCell>
                                        <TableCell align="left">EventBanner&nbsp;</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {paymentInfo.map(payment => <SingleDonation key={payment._id} payment={payment} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}></SingleDonation>)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default AllDonation;