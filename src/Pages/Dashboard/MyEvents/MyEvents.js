import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MySingleEvent from '../MySingleEvent/MySingleEvent';

const MyEvents = () => {
    const {user} = useAuth()
    const [myEvents, setMyEvents] = useState([])
    const myEmail = user?.email;
    useEffect(() => {
      fetch(`https://tranquil-cliffs-23009.herokuapp.com/register/${myEmail}`)
      .then(res => res.json())
      .then(data => {
          // console.log(data);
          setMyEvents(data);
      })
    }, [myEmail])

    //DELETE ITEM
  const handleDelete = (id) => {
    const deleteData = window.confirm("Are you sure you want to delete?");
    if (deleteData) {
      fetch(`https://tranquil-cliffs-23009.herokuapp.com/register/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.deletedCount) {
            alert("The data is deleted successfully");
            const userRemainingEvents = myEvents.filter((userEvent) => userEvent._id !== id);
            setMyEvents(userRemainingEvents);
          }
        });
    } else {
      alert("The data is not deleted");
    }
  };
    
    return (
        <div>
           <div className='container'>
               <div className='row'>
                   {myEvents.map(myEvent=><MySingleEvent key={myEvent._id} myEvent={myEvent} handleDelete={handleDelete}></MySingleEvent>)}
               </div>
           </div>
        </div>
    );
};

export default MyEvents;