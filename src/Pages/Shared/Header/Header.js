import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Link className="mx-5" to="/home">Home</Link>
      <Link className="mx-5"  to="/events">Events</Link>
      {user?.email && <Link  className="mx-5" to="/dashboard">Dashboard</Link>}
      {!user?.email && <Link className="mx-5"  to="/login">Login</Link>}
      {!user?.email && <Link className="mx-5"  to="/register">Register</Link>}
      {user?.email && 
        <img style={{borderRadius: "100%"}} src={user?.photoURL} alt="" width="50px" height="50px" />
      }           
      {user?.email && <span  className="mx-5" style={{ color: "black" }}>{user?.email}</span>}           
      {user?.email && <button onClick={logOut}>Sign Out</button>}
    </div>
  );
};

export default Header;
