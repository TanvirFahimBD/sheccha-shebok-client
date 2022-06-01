import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/events">Events</Link>
      {user?.email && <Link to="/addEvent">Add Event</Link>}
      {user?.email && <Link to="/myEvents">My Events</Link>}
      {user?.email && <Link to="/allEvents">All Events</Link>}
      {!user?.email && <Link to="/login">Login</Link>}
      {user?.email && <span style={{ color: "black" }}>{user?.displayName}</span>}           
      {user?.email && <button onClick={logOut}>Sign Out</button>}
    </div>
  );
};

export default Header;
