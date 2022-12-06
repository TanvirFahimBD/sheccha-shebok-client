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
import EventUpdatePage from "./Pages/EventUpdatePage/EventUpdatePage";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Register from "./Pages/Login/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Donation from "./Pages/Donation/Donation/Donation";
import EventDetails from "./Pages/EventAll/EventDetails/EventDetails";
import MyDonation from "./Pages/Donation/MyDonation/MyDonation";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import Profile from "./Pages/Dashboard/Profile/Profile";
import MyReview from "./Pages/Dashboard/MyReview/MyReview";
import AddNotices from "./Pages/Dashboard/AddEvent/AddNotices/AddNotices";
import Notices from "./Pages/Dashboard/Notices/Notices";
import Events from "./Pages/EventAll/Events/Events";
import AllEvents from "./Pages/Dashboard/AllEvents/AllEvents";
import AllRegistration from "./Pages/Dashboard/AllRegistration/AllRegistration";
import Footer from "./Pages/Shared/Footer/Footer";
import EventRegisterRoleUpdate from "./Pages/EventRegisterRoleUpdate/EventRegisterRoleUpdate";
import AllDonation from "./Pages/Dashboard/AllDonation/AllDonation";
import AllAccounts from "./Pages/Dashboard/AllAccounts/AllAccounts";
import AccountRoleUpdate from "./Pages/Dashboard/AllAccounts/AccountRoleUpdate";

//TODO: donation amount select or input not keep fixed 
//TODO: dashboard -> admin -> event based group members add

//TODO: all pages human face image replace

function App() {
  return (
    <div className="App">
      <div id="page-container">
        <div id="content-wrap">
          <AuthProvider>
            <Router>
              <Header></Header>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/events" element={<Events />} />
                <Route path="/eventDetails/:eventId" element={<EventDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* private routes  */}
                <Route path="/donation/:eventId" element={<PrivateRoute><Donation /></PrivateRoute>} />
                <Route path="/events/register/:singleEventId" element={<PrivateRoute><SingleEventRegister /></PrivateRoute>} />

                {/* dashboard routes  */}
                <Route path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }>
                  <Route path="/dashboard" element={<DashboardHome />} />
                  <Route path="/dashboard/notices" element={<Notices />} />
                  <Route path="/dashboard/profile" element={<Profile />} />
                  <Route path="/dashboard/donation" element={<MyDonation />} />
                  <Route path="/dashboard/myReview" element={<MyReview />} />
                  <Route path="/dashboard/addReview" element={<AddReview />} />
                  <Route path="/dashboard/myEvents" element={<MyEvents />} />
                  <Route path="/dashboard/event-register-role-update/:singleEventId" element={<AdminRoute><EventRegisterRoleUpdate /></AdminRoute>} />
                  <Route path="/dashboard/addNotice" element={<AdminRoute><AddNotices /></AdminRoute>} />
                  <Route path="/dashboard/addEvent" element={<AdminRoute><AddEvent /> </AdminRoute>} />
                  <Route path="/dashboard/eventUpdatePage/:singleEventId" element={<AdminRoute><EventUpdatePage /></AdminRoute>} />
                  <Route path="/dashboard/users/:accountId" element={<AdminRoute><AccountRoleUpdate /></AdminRoute>} />
                  <Route path="/dashboard/allEvents" element={<AdminRoute><AllEvents /></AdminRoute>} />
                  <Route path="/dashboard/all-event-registration" element={<AdminRoute><AllRegistration /></AdminRoute>} />
                  <Route path="/dashboard/all-donation" element={<AdminRoute> <AllDonation /> </AdminRoute>} />
                  <Route path="/dashboard/all-accounts" element={<AdminRoute> <AllAccounts /> </AdminRoute>} />
                </Route>

                {/* unknown routes  */}
                <Route path="*" element={<NoMatch />}></Route>
              </Routes>
            </Router>
          </AuthProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
