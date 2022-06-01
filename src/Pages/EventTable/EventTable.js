import React from 'react';
import { Link } from 'react-router-dom';

const EventTable = (props) => {
    
    const {_id, title, banner, desc, date} = props.event; 
    return (
             <tbody>
                <tr>
                    <td>{title}</td>
                    <td>{date}</td>
                    <td>{desc}</td>
                    <td>{banner}</td>
                    <td><button className='btn btn-danger' onClick={() => props.handleDelete(_id)}>X</button><Link to={`/events/update/${_id}`}>
                  <button className="btn btn-warning"><i className="fa-solid fa-pen-to-square"></i></button>
            </Link></td>
                </tr>
            </tbody>
    );
};

export default EventTable;