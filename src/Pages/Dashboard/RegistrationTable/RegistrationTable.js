import React from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import { TableRow } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

const RegistrationTable = ({ registration, handleDelete }) => {
    const { _id, name, email, date, title } = registration;

    return (
        <>
            <TableRow>
                <TableCell component="th" scope="row">
                    {title}
                </TableCell>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="left">{date}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">
                    <Link to={`/dashboard/event-register-role-update/${_id}`}>
                        <button className="btn btn-warning"><AddModeratorIcon /></button>
                    </Link>
                </TableCell>
                <TableCell align="right">
                    <button className='btn btn-danger' onClick={() => handleDelete(registration)}><DeleteForeverIcon /></button>
                </TableCell>
            </TableRow>
        </>
    );
};

export default RegistrationTable;