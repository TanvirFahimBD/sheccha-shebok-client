import React from 'react';

const MySingleEvent = (props) => {
   const {title,desc,banner,date} = props.myEvent;
   
//DELETE ITEM
  const handleDelete = (id) => {
    // const deleteData = window.confirm("Are you sure you want to delete?");
    // if (deleteData) {
    //   fetch(`http://localhost:5000/users/${id}`, {
    //     method: "DELETE",
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.deletedCount) {
    //         alert("The data is deleted successfully");
    //         const remainingUsers = users.filter((user) => user._id !== id);
    //         setUsers(remainingUsers);
    //       }
    //     });
    // } else {
    //   alert("The data is not deleted");
    // }
  };
    return (
        <div className='col-md-12 col-lg-6'>
            <img src={banner} alt="" height="300px" />
            <h1>{title}</h1>
            <p>{date}</p>
            <small>{desc}</small>
                        {/* <button
              className="btn btn-danger"
              onClick={() => handleDelete(event._id)}
              >
              X
            </button> */}
        </div>
    );
};

export default MySingleEvent;