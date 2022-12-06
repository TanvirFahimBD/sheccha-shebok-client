import React from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import { TableRow } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';

const RegistrationTable = (props) => {
    const { _id, name, email, date, title } = props.registration;
    return (
        <>
            <TableRow>
                <TableCell component="th" scope="row">
                    {title}
                </TableCell>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{date}</TableCell>
                <TableCell align="left">
                    <Link to={`/events/eventUpdatePage/${_id}`}>
                        <button className="btn btn-warning"><EditLocationAltIcon /></button>
                    </Link>
                </TableCell>
                <TableCell align="right">
                    <button className='btn btn-danger' onClick={() => props.handleDelete(_id)}><DeleteForeverIcon /></button>
                </TableCell>
            </TableRow>
        </>
    );
};

export default RegistrationTable;