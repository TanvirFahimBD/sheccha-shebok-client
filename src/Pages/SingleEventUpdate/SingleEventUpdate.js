import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SingleEventUpdate = () => {
  const {user} = useAuth()
  const { singleEventId } = useParams();
  const [event, setEvent] = useState({});
  const navigate = useNavigate();

  //Get Current Event Info
  useEffect(() => {
    fetch(`http://localhost:5000/events/${singleEventId}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        console.log(data);
      });
  }, []);

  const handleVolunteerRegister = (e) => {
    const eventRegister = {name: user.displayName, email: user.email, date: event.date, desc: event.desc, title:event.title, banner: event.banner }
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventRegister),
    })
      .then((res) => res.json())
      .then((data) => {
       if(data?.insertedId){
         alert("Registration Successful")
         navigate("/myEvents")
       }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h3>Update Event</h3>
      <form onSubmit={handleVolunteerRegister}>
      <input
          type="text"
          name=""
          id=""
          value={event.title || ""}
        />
        <br />
        <input
          type="text"
          name=""
          id=""
          value={event.date || ""}
          />
        <br />
        <textarea
          type="text"
          name=""
          id=""
          value={event.desc || ""}
          ></textarea>
          <br />
        <input
          type="text"
          name=""
          id=""
          value={event.banner || ""}
          />
        
        <br />
        <input className="btn btn-primary" type="submit" value="Update Event" />
      </form>
    </div>
  );
};

export default SingleEventUpdate;
