import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { Box, Button, Grid, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth';

const AccountRoleUpdate = () => {
    const { token } = useAuth();
    const { accountId } = useParams();
    const [account, setAccount] = useState({});

    const { displayName, email, occupation, role } = account;

    useEffect(() => {
        fetch(`https://sheccha-shebok-server.up.railway.app/users/account/${accountId}`)
            .then((res) => res.json())
            .then((data) => {
                setAccount(data);
            });
    }, [accountId]);

    const handleRole = (e) => {
        const role = e.target.value;
        const newAccount = { ...account }
        newAccount.role = role;
        setAccount(newAccount)
        e.preventDefault();
    }

    const handleEditRole = (e) => {
        fetch("https://sheccha-shebok-server.up.railway.app/users/role", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify(account)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.modifiedCount) {
                    toast.success(`${email} role ${role} added Successfully`)
                } else {
                    toast.error(`${email} role not changed`)
                }
            });
        e.preventDefault();
        e.target.reset()
    };

    return (
        <div>
            <h1 className='text-center text-primary'>Account Role Update</h1>
            <div>
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={6}>
                            <img className="m-5" src="https://i.ibb.co/HzwHNDJ/Calendar-rafiki.png" alt="" height="700px" />
                        </Grid>
                        <Grid className="text-center my-4" item xs={6}>
                            <Typography sx={{ my: 8 }} variant="h2" component="h2">
                                Add <span className="text-primary">Role</span>
                            </Typography>
                            <form onSubmit={handleEditRole}>
                                <InputLabel id="role">Role</InputLabel>
                                <Select className="w-25"
                                    labelId="role-select"
                                    id="role-select"
                                    label="Role Select"
                                    value={role}
                                    onChange={handleRole}
                                >
                                    <MenuItem value="volunteer">Volunteer</MenuItem>
                                    <MenuItem value="admin">Admin</MenuItem>
                                </Select>
                                <br />
                                <br />
                                <TextField sx={{ width: 300 }}
                                    id="email"
                                    label="Email"
                                    name="email"
                                    type="text"
                                    value={email || ""}
                                    variant="filled" readOnly
                                />
                                <br />
                                <br />
                                <TextField sx={{ width: 300 }}
                                    id="displayName"
                                    label="DisplayName"
                                    name="displayName"
                                    type="text"
                                    value={displayName || ""}
                                    variant="filled" readOnly
                                />
                                <br />
                                <br />
                                <TextField sx={{ width: 300 }}
                                    id="occupation"
                                    label="Occupation"
                                    name="occupation"
                                    type="text"
                                    value={occupation || ""}
                                    variant="filled" readOnly
                                />
                                <br />
                                <br />
                                <Button sx={{ width: 300 }} variant="contained" type="submit">Add Role</Button>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AccountRoleUpdate;