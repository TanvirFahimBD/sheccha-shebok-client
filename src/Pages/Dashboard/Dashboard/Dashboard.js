import * as React from 'react';
import RateReviewIcon from '@mui/icons-material/RateReview';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AddCardIcon from '@mui/icons-material/AddCard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LogoutIcon from '@mui/icons-material/Logout';
import PaidIcon from '@mui/icons-material/Paid';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 200;

export default function Dashboard(props) {
  const { user, admin, logOut, volunteer } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <NavLink className="mx-3" style={{ textDecoration: "none" }} to={"/"}>
        <Button color="inherit" sx={{ m: 3 }}>
          <HomeIcon />
        </Button>
      </NavLink>
      <br />
      <Link className="text-white text-decoration-none" to="/dashboard/profile">
        {user?.photoURL
          ?
          <img
            style={{
              borderRadius: "50%",
              border: "2px solid white",
              height: "100px",
              marginLeft: "20%",
              marginBottom: "20%",
            }}
            src={user?.photoURL}
            alt=""
          />
          :
          <img src="https://i.ibb.co/3czDVCx/undraw-profile-pic-ic5t.png"
            style={{
              borderRadius: "50%",
              border: "2px solid white",
              height: "100px",
              marginLeft: "20%",
              marginBottom: "20%",
            }}
            alt="" />
        }
      </Link>
      <h6 className='mx-2'>{user.displayName}</h6>
      <br />
      <Divider />
      <NavLink style={{ textDecoration: "none" }} to="/dashboard">
        <Button color="inherit">
          <DashboardIcon className='mx-2' /> Dashboard
        </Button>
      </NavLink>
      <Divider />
      <br />
      <NavLink style={{ textDecoration: "none" }} to="/dashboard/donation">
        <Button color="inherit">
          <PaidIcon className='mx-2' /> My Donation
        </Button>
      </NavLink>
      <Divider />
      <br />
      {
        volunteer &&
        <>
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/myEvents">
            <Button color="inherit">
              <EventAvailableIcon className='mx-2' /> My Events
            </Button>
          </NavLink>
          <Divider />  <br />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/addReview">
            <Button color="inherit">
              <RateReviewIcon className='mx-2' /> Add Review
            </Button>
          </NavLink>
          <Divider />  <br />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/notices">
            <Button color="inherit">
              <CircleNotificationsIcon className='mx-2' /> Notices
            </Button>
          </NavLink>
          <Divider />  <br />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/myReview">
            <Button color="inherit">
              <ReviewsIcon className='mx-2' /> My Review
            </Button>
          </NavLink>
          <Divider />  <br />
        </>
      }
      {
        admin &&
        <>
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/addNotice">
            <Button color="inherit">
              <AddAlertIcon className='mx-2' /> Add Notice
            </Button>
          </NavLink>
          <Divider />  <br />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/addEvent">
            <Button color="inherit">
              <AddCardIcon className='mx-2' /> Add Event
            </Button>
          </NavLink>
          <Divider />  <br />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/allEvents">
            <Button color="inherit">
              {" "}
              <EventNoteIcon className='mx-2' />All Events
            </Button>
          </NavLink>{" "}
          <Divider />  <br />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/allRegistration">
            <Button color="inherit">
              <HowToRegIcon className='mx-2' /> All Reg.
            </Button>
          </NavLink>{" "}
          <Divider />  <br />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/makeAdmin">
            <Button color="inherit">
              <AdminPanelSettingsIcon className='mx-2' /> Make Admin
            </Button>
          </NavLink>
          <Divider />  <br />
          <NavLink style={{ textDecoration: "none" }} to="/dashboard/makeVolunteer">
            <Button color="inherit">
              <VolunteerActivismIcon className='mx-2' /> Add Volunteer
            </Button>
          </NavLink>
          <Divider />
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to="/dashboard/addMember"
          >
            <Button color="inherit">
              <GroupAddIcon className='mx-2' /> Add Member
            </Button>
          </NavLink>
          <Divider />
          <br />
        </>
      }
      <NavLink style={{ textDecoration: "none" }} to="/dashboard/profile">
        <Button color="inherit">
          <AccountCircleIcon className='mx-2' /> My Profile
        </Button>
      </NavLink>
      <Divider />  <br />
      <NavLink style={{ textDecoration: "none" }} to={"/"}>
        <Button color="inherit" onClick={logOut}>
          <LogoutIcon className='mx-2' /> Log Out
        </Button>
      </NavLink>
      <Divider />  <br />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}
