import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/adduser">Add users</Link>
      {!user?.email && <Link to="/login">Login</Link>}
      {user?.email && (
        <span style={{ color: "black" }}>{user?.displayName}</span>
      )}
      {user?.email && <button onClick={logOut}>Sign Out</button>}
    </div>
  );
};

export default Header;
