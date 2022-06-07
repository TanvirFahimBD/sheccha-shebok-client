import React, { useEffect, useState } from "react";
import SingleEvent from "../SingleEvent/SingleEvent";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  // console.log(search);
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        console.log("data",data);
        const newData = data.find(dt => dt.title === search)
        console.log("newData",newData)
      });
  }, []);

  return (
    <div className="text-center">
      <h1 className='my-5 text-center text-primary'  > {events.length} Events Available</h1>
      <input type="text" name="" id="" onBlur={(e) => setSearch(e.target.value)} />
      <input type="submit" value="Search" />
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
