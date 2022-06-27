import React, { useEffect, useState } from "react";
import SingleEvent from "../../EventAll/SingleEvent/SingleEvent";

const HomeEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://tranquil-cliffs-23009.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.slice(0, 6));
      });
  }, []);

  return (
    <div className="text-center">
      <h1 className='my-5 text-center text-primary'  >Current Events</h1>
      <div className="container">
      <div className="row">
          {events.map((event) => (
            <SingleEvent key={event._id} event={event}></SingleEvent>
          ))}
      </div>
    </div>
    </div>
  );
};

export default HomeEvents;
