import React from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const EventTable = (props) => {

    const { _id, title, banner, desc, date } = props.event;
    return (
        <>
            <TableRow>

            <TableCell component="th" scope="row">
                {title}
            </TableCell>
            <TableCell align="right">{date}</TableCell>
            <TableCell align="right">{desc}</TableCell>
            <TableCell align="right">
                <img style={{borderRadius: "100%"}} src={banner} alt="" width="100px" height="100px" />
            </TableCell>
            <TableCell align="right">
                <button className='btn btn-danger' onClick={() => props.handleDelete(_id)}><DeleteForeverIcon/>
                </button>
                <Link to={`/events/eventUpdatePage/${_id}`}>
                    <button className="btn btn-warning"><EditLocationAltIcon/></button>
                </Link>
                <Link to={`/events/eventUpdateRegisters/${_id}`}>
                    <button className="btn btn-primary"><CloudUploadIcon/></button>
                </Link>
            </TableCell>
            </TableRow>
        </>
    );
};

export default EventTable;