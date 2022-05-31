import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const { singleUserId } = useParams();
  const [users, setUsers] = useState({});
  //UPDATE ITEM
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        const currentUser = data.find((user) => user._id === singleUserId);
        setUsers(currentUser);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:5000/users/${singleUser}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // }, []);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    const newUser = { name: newName, email: users.email };
    setUsers(newUser);
    console.log(newUser);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    const newUser = { name: users.name, email: newEmail };
    setUsers(newUser);
    console.log(newUser);
  };

  const handleUpdate = (e) => {
    fetch(`http://localhost:5000/users/${singleUserId}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount) {
          alert("User updated successfully");
          const newUser = { name: "", email: "" };
          setUsers(newUser);
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h3>{users.name}</h3>
      <h5>{users.email}</h5>
      <small>{singleUserId}</small>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name=""
          id=""
          value={users.name || ""}
          onChange={handleNameChange}
        />
        <input
          type="email"
          name=""
          id=""
          value={users.partner || ""}
          onChange={handleEmailChange}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SingleUser;
