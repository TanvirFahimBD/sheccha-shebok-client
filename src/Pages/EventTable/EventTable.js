import React from 'react';

const EventTable = (props) => {
    const {_id, name, email, date, title} = props.event;
    return (
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{date}</td>
                    <td>{title}</td>
                    <td><button className='btn btn-danger' onClick={() => props.handleDelete(_id)}>X</button></td>
                </tr>
            </tbody>
    );
};

export default EventTable;