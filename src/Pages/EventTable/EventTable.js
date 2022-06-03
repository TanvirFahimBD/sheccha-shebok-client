import React from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const EventTable = (props) => {

    const { _id, title, banner, desc, date } = props.event;
    return (
        <>
       
        <TableCell component="th" scope="row">
          {title}
        </TableCell>
        <TableCell align="right">{date}</TableCell>
        <TableCell align="right">{desc}</TableCell>
        <TableCell align="right">{banner}</TableCell>
        <TableCell align="right">
            <button className='btn btn-danger' onClick={() => props.handleDelete(_id)}>X
                    </button>
                    <Link to={`/events/eventUpdatePage/${_id}`}>
                    <button className="btn btn-warning"><i className="fa-solid fa-pen-to-square"></i></button>
                    </Link>
                    <Link to={`/events/eventUpdateRegisters/${_id}`}>
                    <button className="btn btn-primary"><i className="fa-solid fa-upload"></i></button>
                    </Link>
                    </TableCell>
                    
        </>
    );
};

export default EventTable;