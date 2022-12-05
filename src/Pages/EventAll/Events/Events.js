import React, { useEffect, useState } from "react";
import SingleEvent from "../SingleEvent/SingleEvent";
import { Button, TextField } from "@mui/material";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [searchEvents, setSearchEvents] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        const newData = data.filter(dt => dt.title.toLowerCase().includes(search.toLowerCase()))
        if (newData) {
          console.log("newData", newData);
          setSearchEvents(newData)
        }
      })
  }, [search]);

  return (
    <div className="text-center">
      {(searchEvents.length === 0) && <h1 className='my-5 text-center text-primary'  > {events.length} Events Available</h1>}
      {(searchEvents.length > 0) && <h1 className='my-5 text-center text-primary'  > {searchEvents.length} Events Available</h1>}
      <TextField sx={{ width: 300 }}
        id="filled-password-input"
        label="Search"
        name="Search"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button sx={{ height: 55 }} variant="contained" type="submit">Search</Button>
      <div className="container">
        <div className="row">
          {(searchEvents.length === 0) && events.map((event) => (
            <SingleEvent key={event._id} event={event}></SingleEvent>
          ))}
          {(searchEvents.length > 0) && searchEvents.map((event) => (
            <SingleEvent key={event._id} event={event}></SingleEvent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
