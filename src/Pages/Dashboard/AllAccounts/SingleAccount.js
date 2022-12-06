import React from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import { TableRow } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

const SingleAccount = ({ account, handleDelete }) => {
    const { _id, address, age, education, email, displayName, occupation, role } = account;

    return (
        <>
            <TableRow>
                <TableCell align="left">{displayName}</TableCell>
                <TableCell align="left">{age}</TableCell>
                <TableCell align="left">{education}</TableCell>
                <TableCell align="left">{occupation}</TableCell>
                <TableCell align="left">{address}</TableCell>
                <TableCell align="left">{role}</TableCell>
                <TableCell component="th" scope="row">
                    {email}
                </TableCell>
                <TableCell align="left">
                    <Link to={`/dashboard/users/${_id}`}>
                        <button className="btn btn-warning"><AddModeratorIcon /></button>
                    </Link>
                </TableCell>
                <TableCell align="left">
                    <button className='btn btn-danger' onClick={() => handleDelete(account)}><DeleteForeverIcon /></button>
                </TableCell>
            </TableRow>
        </>
    );
};

export default SingleAccount;