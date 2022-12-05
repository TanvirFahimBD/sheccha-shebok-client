import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MySingleEvent from '../MySingleEvent/MySingleEvent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyEvents = () => {
  const { user } = useAuth()
  const [myEvents, setMyEvents] = useState([])
  const myEmail = user?.email;

  useEffect(() => {
    fetch(`http://localhost:5000/register/${myEmail}`)
      .then(res => res.json())
      .then(data => {
        setMyEvents(data);
      })
  }, [myEmail])

  //DELETE ITEM
  const handleDelete = (myEvent) => {
    const deleteData = window.confirm("Are you sure you want to delete?");
    if (deleteData) {
      fetch(`http://localhost:5000/register/${myEvent._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success(`${myEvent.title} deleted successfully`);
            const userRemainingEvents = myEvents.filter((userEvent) => userEvent._id !== myEvent._id);
            setMyEvents(userRemainingEvents);
          }
        });
    } else {
      toast.error(`${myEvent.title} not deleted`);
    }
  };

  return (
    <div>
      <div className='container'>
        <div className='row'>
          {myEvents.map(myEvent => <MySingleEvent key={myEvent._id} myEvent={myEvent} handleDelete={handleDelete}></MySingleEvent>)}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MyEvents;