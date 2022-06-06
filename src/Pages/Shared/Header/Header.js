import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            style={{ textDecoration: "none", color: "white", margin: "0 21" }}
            to="/"
          >
            <Button color="inherit">Seccha Shebok</Button>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white", margin: "0 34% 0 1%" }}
            to="/events"
          >
            <Button color="inherit">Events</Button>
          </Link>

          {user.email && <Link
            style={{ textDecoration: "none", color: "white", margin: "0 1% 0 35%" }}
            to="/dashboard"
          >
            <Button color="inherit">Dashboard</Button>
          </Link>}

          {user?.photoURL ? (
            <img
              style={{
                borderRadius: "50%",
                border: "2px solid white",
                height: "40px",
                marginLeft: "1%",
              }}
              src={user.photoURL}
              alt=""
            />
          ) : (
            <Button
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "35%",
              }}
              color="inherit"
            >
              {user?.displayName}
            </Button>
          )}
          {user?.email && (
            <Link
              style={{ textDecoration: "none", color: "white", margin: "0 1%" }}
              to="/"
            >
              <Button color="inherit" onClick={logOut}>
                Logout
              </Button>
            </Link>
          )}
          {!user?.email && (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
};

export default Header;
