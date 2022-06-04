import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    const {event} = props;
    
    return (
              <div className='col-md-6 col-lg-4'>
               <Link to={`/eventDetails/${event._id}`}> <img src={event.banner} alt="" height="200px" />
                  <h3>{event.title}</h3></Link>
            
            

            </div>
    );
};

export default SingleEvent;