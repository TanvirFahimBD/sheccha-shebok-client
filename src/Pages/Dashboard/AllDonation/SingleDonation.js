import React from 'react';
import TableCell from '@mui/material/TableCell';
import { TableRow } from '@mui/material';

const SingleDonation = ({ payment }) => {
    const { amount, transaction, eventBanner, event, email, date } = payment;
    const donatedAmount = amount / 100;

    return (
        <>
            <TableRow>
                <TableCell align="left">${donatedAmount}</TableCell>
                <TableCell align="left">{transaction}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{event}</TableCell>
                <TableCell align="left">{date}</TableCell>
                <TableCell align="left">
                    <img src={eventBanner} alt="" style={{ borderRadius: '50%' }} width={100} height={100} />
                </TableCell>
            </TableRow>
        </>
    );
};

export default SingleDonation;