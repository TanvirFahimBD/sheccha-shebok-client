import React from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const EventTable = ({ event, handleDelete }) => {
    const { _id, title, banner, date } = event;

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {title}
            </TableCell>
            <TableCell align="left">{date}</TableCell>
            <TableCell align="left">
                <img style={{ borderRadius: "100%" }} src={banner} alt="" width="100px" height="100px" />
            </TableCell>
            <TableCell align="right">
                <Link to={`/dashboard/eventUpdatePage/${_id}`}>
                    <button className="btn btn-warning"><EditIcon /></button>
                </Link>
            </TableCell>
            <TableCell align="right">
                <button className='btn btn-danger' onClick={() => handleDelete(event)}><DeleteForeverIcon />
                </button>
            </TableCell>
        </TableRow>
    );
};

export default EventTable;