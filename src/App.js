import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import AddEvent from "./Pages/AddEvent/AddEvent";
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import MyEvents from "./Pages/MyEvents/MyEvents";
import Header from "./Pages/Shared/Header/Header";
import SingleEventRegister from "./Pages/SingleEventRegister/SingleEventRegister";
import AllRegistration from "./Pages/AllRegistration/AllRegistration";
import AllEvents from "./Pages/AllEvents/AllEvents";
import EventUpdateRegisters from "./Pages/EventUpdateRegisters/EventUpdateRegisters";
import EventUpdatePage from "./Pages/EventUpdatePage/EventUpdatePage";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Register from "./Pages/Login/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
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
              <Route
                path="/dashboard/addEvent"
                element={
                  <AddEvent />
                }
              ></Route>

            <Route path="/dashboard/allEvents" element={<AllEvents />}></Route>

            <Route path="/dashboard/allRegistration" element={<AllRegistration />}></Route>



            </Route>


            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
