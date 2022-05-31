import axios from "axios";
import React, { useRef } from "react";

const AddUsers = () => {
  const nameRef = useRef();
  const ptrRef = useRef();
  const picRef = useRef();

  const handleAdd = (e) => {
    const name = nameRef.current.value;
    const partner = ptrRef.current.value;
    const img = picRef.current.value;
    const newUser = { name, partner, img };
    axios.post("http://localhost:5000/users", newUser).then((res) => {
      if (res?.data?.insertedId) {
        alert("User inserted Successfully");
        e.target.reset();
      }
    });
    e.preventDefault();
  };
  return (
    <div>
      <h1>Please Add an User</h1>
      <form onSubmit={handleAdd}>
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="text" placeholder="Partner" ref={ptrRef} />
        <input type="text" placeholder="Img URL" ref={picRef} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddUsers;
