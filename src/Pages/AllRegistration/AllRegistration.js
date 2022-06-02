import React, { useEffect, useState } from 'react';
import RegistrationTable from '../RegistrationTable/RegistrationTable';

const AllRegistration = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/register")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setEvents(data);
            })
    }, [])

        //DELETE Registration
  const handleDelete = (id) => {
    const deleteData = window.confirm("Are you sure you want to delete?");
    if (deleteData) {
      fetch(`http://localhost:5000/register/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.deletedCount) {
            alert("The data is deleted successfully");
            const userRemainingEvents = events.filter((userEvent) => userEvent._id !== id);
            setEvents(userRemainingEvents);
          }
        });
    } else {
      alert("The data is not deleted");
    }
  };
    

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Email ID</th>
                        <th>Registration Date</th>
                        <th>Volunteer List</th>
                        <th>Action</th>
                    </tr>
                </thead>
                    {events.map(event => <RegistrationTable key={event._id} event={event} handleDelete={handleDelete}></RegistrationTable> )}
            </table>
        </>
    );
};

export default AllRegistration;