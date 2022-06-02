import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Link className="mx-5" to="/home">Home</Link>
      <Link className="mx-5"  to="/events">Events</Link>
      {user?.email && <Link  className="mx-5" to="/addEvent">Add Event</Link>}
      {user?.email && <Link  className="mx-5" to="/myEvents">My Events</Link>}
      {user?.email && <Link  className="mx-5" to="/allRegistration">All Registration</Link>}
      {user?.email && <Link  className="mx-5" to="/allEvents">All Events</Link>}
      {!user?.email && <Link className="mx-5"  to="/login">Login</Link>}
      {!user?.email && <Link className="mx-5"  to="/register">Register</Link>}
      {user?.email && <span  className="mx-5" style={{ color: "black" }}>{user?.displayName}</span>}           
      {user?.email && <button onClick={logOut}>Sign Out</button>}
    </div>
  );
};

export default Header;
