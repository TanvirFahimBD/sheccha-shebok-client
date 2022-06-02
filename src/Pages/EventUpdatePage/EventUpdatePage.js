import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EventUpdatePage = () => {
  const { singleEventId } = useParams();
  const [event, setEvent] = useState({});
//   const [title, setTitle] = useState(event?.title);
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

  const handleTitleChange = (e) => {
      const newTitle = e.target.value;
      const newEvent = {...event}
    newEvent.title = newTitle;
      setEvent(newEvent)
    e.preventDefault();
  }

  const handleDateChange = (e) => { 
    const newDate = e.target.value;
    const newEvent = {...event}
    newEvent.date = newDate;
    setEvent(newEvent)
    e.preventDefault();
  }

  const handleDescChange = (e) => { 
    const newDesc = e.target.value;
    const newEvent = {...event}
    newEvent.desc = newDesc;
    setEvent(newEvent)
    e.preventDefault();
  }

  const handleBannerChange = (e) => { 
    const newBanner = e.target.value;
    const newEvent = {...event}
    newEvent.banner = newBanner;
    setEvent(newEvent)
    e.preventDefault();
  }

  const handleEventUpdate = (e) => {
    fetch(`http://localhost:5000/events/${singleEventId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(event),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log("events", data);
          if(data?.modifiedCount){
            alert("Event Updated Successful")
            navigate("/myEvents")
          }
       
      });
    e.preventDefault();
  };

  return (
    <div>
      <h3>Update Event Page</h3>
      <form onSubmit={handleEventUpdate}>
      <input
          type="text"
          name=""
          id=""
          value={event.title || ""}
          onChange={handleTitleChange}
        />
        <br />
        <input
          type="text"
          name=""
          id=""
          value={event.date || ""} onChange={handleDateChange}
          />
        <br />
        <textarea
          type="text"
          name=""
          id=""
          value={event.desc || ""} onChange={handleDescChange}
          ></textarea>
          <br />
        <input
          type="text"
          name=""
          id=""
          value={event.banner || ""} onChange={handleBannerChange}
          />        
        <br />
        <input className="btn btn-warning" type="submit" value="Update Event Page" />
      </form>
    </div>
  );
};

export default EventUpdatePage;