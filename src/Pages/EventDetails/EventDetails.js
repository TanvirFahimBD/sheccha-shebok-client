import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const EventDetails = () => {
    const {eventId} = useParams()
    const [matchEvent, setMatchEvent] = useState({});
    useEffect(() => {
      fetch("http://localhost:5000/events")
        .then((res) => res.json())
        .then((data) => {
            const event = data.find( ev => ev._id === eventId)
            console.log(event);
            setMatchEvent(event)
        });
    }, []);
    return (
        <div>
            <img src={matchEvent.banner} alt="" height="400px"/>
            <h2>{matchEvent.title}</h2>
            <h5>{matchEvent.date}</h5>
            <p style={{width: "400px"}}>{matchEvent.desc}</p>
            <Link to={`/events/register/${matchEvent._id}`}>
                  <button className="btn btn-primary">Register</button>
            </Link>
            <Link to={`/donation/${matchEvent._id}`}>
                  <button className="btn btn-warning">Donate</button>
            </Link>
        </div>
    );
};

export default EventDetails;