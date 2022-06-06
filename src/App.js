import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import AddEvent from "./Pages/Dashboard/AddEvent/AddEvent";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import MyEvents from "./Pages/Dashboard/MyEvents/MyEvents";
import Header from "./Pages/Shared/Header/Header";
import SingleEventRegister from "./Pages/EventAll/SingleEventRegister/SingleEventRegister";
import EventUpdateRegisters from "./Pages/EventUpdateRegisters/EventUpdateRegisters";
import EventUpdatePage from "./Pages/EventUpdatePage/EventUpdatePage";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Register from "./Pages/Login/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Donation from "./Pages/Donation/Donation/Donation";
import EventDetails from "./Pages/EventAll/EventDetails/EventDetails";
import MyDonation from "./Pages/Donation/MyDonation/MyDonation";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Profile from "./Pages/Dashboard/Profile/Profile";
import MyReview from "./Pages/Dashboard/MyReview/MyReview";
import AddNotices from "./Pages/Dashboard/AddEvent/AddNotices/AddNotices";
import Notices from "./Pages/Dashboard/Notices/Notices";
import AddVolunteer from "./Pages/Dashboard/AddVolunteer/AddVolunteer";
import Events from "./Pages/EventAll/Events/Events";
import AllEvents from "./Pages/Dashboard/AllEvents/AllEvents";
import AddMember from "./Pages/Dashboard/AddEvent/AddMember/AddMember";
import AllRegistration from "./Pages/Dashboard/AllRegistration/AllRegistration";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/donation/:eventId" element={<Donation />}></Route>
            <Route path="/eventDetails/:eventId" element={<EventDetails />}></Route>
            <Route path="/events" element={<PrivateRoute><Events /></PrivateRoute>}></Route>


            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route
              path="/events/register/:singleEventId"
              element={<SingleEventRegister />}
            ></Route>
            <Route
              path="/events/eventUpdatePage/:singleEventId"
              element={<EventUpdatePage />}
            ></Route>
            <Route
              path="/events/eventUpdateRegisters/:singleEventId"
              element={<EventUpdateRegisters />}
            ></Route>
            <Route path="/dashboard"
              element={<PrivateRoute>
                <Dashboard /></PrivateRoute>}>
              <Route
                path="/dashboard"
                element={<DashboardHome />}
              >
              </Route>
              <Route path="/dashboard/myEvents" element={<MyEvents />}></Route>
              <Route path="/dashboard/addNotice" element={<AddNotices />}></Route>
              <Route path="/dashboard/makeVolunteer" element={<AddVolunteer />}></Route>
              <Route path="/dashboard/notices" element={<Notices />}></Route>
              <Route path="/dashboard/profile" element={<Profile />}></Route>
              <Route path="/dashboard/donation" element={<MyDonation />}></Route>
              <Route path="/dashboard/myReview" element={<MyReview />}></Route>
              <Route
                path="/dashboard/addEvent"
                element={
                  <AddEvent />
                }
              ></Route>

              <Route path="/dashboard/allEvents" element={<AllEvents />}></Route>
              <Route path="/dashboard/addReview" element={<AddReview />}></Route>

              <Route path="/dashboard/allRegistration" element={<AllRegistration />}></Route>
              <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>}></Route>
              <Route path="/dashboard/addMember" element={<AddMember />}></Route>



            </Route>


            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
