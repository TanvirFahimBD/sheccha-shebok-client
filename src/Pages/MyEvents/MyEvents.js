import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MySingleEvent from '../MySingleEvent/MySingleEvent';

const MyEvents = () => {
    const {user} = useAuth()
    const [myEvents, setMyEvents] = useState([])
    const myEmail = user?.email;
    useEffect(() => {
      fetch(`http://localhost:5000/register/${myEmail}`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          setMyEvents(data);
      })
    }, [myEmail])
    
    return (
        <div>
           <div className='container'>
               <div className='row'>
                   {myEvents.map(myEvent=><MySingleEvent key={myEvent._id} myEvent={myEvent}></MySingleEvent>)}
               </div>
           </div>
        </div>
    );
};

export default MyEvents;