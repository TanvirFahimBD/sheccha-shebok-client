import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Grid } from "@mui/material";
import useAuth from '../../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SingleAccount from './SingleAccount';
import Loading from '../../Shared/Loading/Loading';

const AllAccounts = () => {
    const { token, isLoading } = useAuth()
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/users", {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setAccounts(data);
            })
    }, [token])

    //DELETE Registration
    const handleDelete = (account) => {
        const deleteData = window.confirm("Are you sure you want to delete?");
        if (deleteData) {
            fetch(`http://localhost:5000/users/${account._id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        const remainingAccounts = accounts.filter((userEvent) => userEvent._id !== account._id);
                        setAccounts(remainingAccounts);
                        toast.success(`${account.email} is deleted successfully`);
                    }
                });
        }
        else {
            toast.error(`${account.email} not deleted`);
        }
    };

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h1>All Accounts</h1>
            <>
                <Box sx={{ width: '100%' }}>
                    <Grid className="d-flex" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="left">Age&nbsp;</TableCell>
                                            <TableCell align="left">Education&nbsp;</TableCell>
                                            <TableCell align="left">Occupation&nbsp;</TableCell>
                                            <TableCell align="left">Address&nbsp;</TableCell>
                                            <TableCell align="left">Role</TableCell>
                                            <TableCell align="left">Email ID&nbsp;</TableCell>
                                            <TableCell align="left">Edit Role</TableCell>
                                            <TableCell align="left">Delete</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {accounts.map(account => <SingleAccount key={account._id} account={account} handleDelete={handleDelete} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}></SingleAccount>)}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </Box>
                <ToastContainer />
            </>
        </div>
    );
};

export default AllAccounts;