import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    const {event} = props;
    
    return (
              <div className='col-md-6 col-lg-4'>
                <img src={event.banner} alt="" height="200px" />
                  <h3>{event.title}</h3>
            <Link to={`/events/register/${event._id}`}>
                  <button className="btn btn-primary">Register</button>
            </Link>
            <Link to={`/events/update/${event._id}`}>
                  <button className="btn btn-warning">Update</button>
            </Link>

            </div>
    );
};

export default SingleEvent;