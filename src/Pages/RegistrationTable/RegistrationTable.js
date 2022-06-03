import React from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import { TableRow } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const RegistrationTable = (props) => {
    const { _id, name, email, date, title } = props.registration;
    return (
        <>
                  <TableRow>

            <TableCell component="th" scope="row">
                {title}
            </TableCell>
            <TableCell align="right">{name}</TableCell>
            <TableCell align="right">{email}</TableCell>
            <TableCell align="right">{date}</TableCell>
            <TableCell align="right">{title}</TableCell>
            <TableCell align="right">
                <button className='btn btn-danger' onClick={() => props.handleDelete(_id)}><DeleteForeverIcon /></button>
            </TableCell>
            </TableRow>

        </>
    );
};

export default RegistrationTable;