import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  //DELETE ITEM
  const handleDelete = (id) => {
    const deleteData = window.confirm("Are you sure you want to delete?");
    if (deleteData) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("The data is deleted successfully");
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
          }
        });
    } else {
      alert("The data is not deleted");
    }
  };

  return (
    <div>
      <h1>Users: {users.length}</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} --- {user.partner}{" "}
            <Link to={`/users/update/${user._id}`}>
              <button className="btn btn-warning">Update</button>
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(user._id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
