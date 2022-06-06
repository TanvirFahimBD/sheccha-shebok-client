import React from 'react';
import { Link } from 'react-router-dom';

const SingleEvent = (props) => {
    const { event } = props;

    return (
        <div className="col-md-6 col-lg-4 my-4">
            <Link style={{textDecoration: "none"}}  to={`/eventDetails/${event._id}`}>
                <div className="card">
                    <img src={event.banner} className="card-img-top" alt="..." height="200px" />
                        <div className="card-body">
                            <h5 className="card-title">{event.title}</h5>
                        </div>
                </div>
            </Link>
                </div>
    );
};

export default SingleEvent;