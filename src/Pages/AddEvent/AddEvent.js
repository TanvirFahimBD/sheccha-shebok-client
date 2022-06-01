import axios from "axios";
import React, { useRef } from "react";

const AddEvent = () => {
  const titleRef = useRef();
  const descRef = useRef();
  const bannerRef = useRef();
  const dateRef = useRef();

  const handleAdd = (e) => {
    const title = titleRef.current.value;
    const desc = descRef.current.value;
    const banner = bannerRef.current.value;
    const date = dateRef.current.value;
    const newEvent = { title, desc, banner, date };
    axios.post("http://localhost:5000/events", newEvent).then((res) => {
      if (res?.data?.insertedId) {
        alert("Event Added Successfully");
        e.target.reset();
      }
    });
    e.preventDefault();
  };
  return (
    <div >
      <h1>Please Add an User</h1>
      <form onSubmit={handleAdd}>

      <input type="text" placeholder="Event Title" ref={titleRef}/>
      <br />
      <textarea  id="txtid" name="txtname" rows="3" cols="30" maxLength="200" ref={descRef} placeholder="Enter Description"></textarea>
      <br />
        <input type="text" placeholder="Banner URL" ref={bannerRef} />
      <br />
        <input type="text" placeholder="Event Date" ref={dateRef} />
      <br />
        <input type="submit" value="Submit" />

      </form>
    </div>
  );
};

export default AddEvent;
