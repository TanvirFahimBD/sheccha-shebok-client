import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    const { event } = props;

    return (
        <div className="col-md-6 col-lg-4 my-4">
            <div className="card">
                <img src={event.banner} className="card-img-top" alt="..." width="100%" height="400px" />
                <div className="card-body">
                    <h3 className="card-title">{event.title}</h3>
                    <Link style={{ textDecoration: "none" }} to={`/eventDetails/${event._id}`}>
                        <Button className='my-3' variant='contained'>View Event</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleEvent;