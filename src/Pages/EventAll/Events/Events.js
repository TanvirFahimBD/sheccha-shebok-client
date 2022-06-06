import React, { useEffect, useState } from "react";
import SingleEvent from "../SingleEvent/SingleEvent";

const Events = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="text-center">
      <h1 className='my-5 text-center text-primary'  > {events.length} Events Available</h1>
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

export default Events;
