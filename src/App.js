import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import AddEvent from "./Pages/AddEvent/AddEvent";
import Events from "./Pages/Events/Events";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NoMatch from "./Pages/NoMatch/NoMatch";
import MyEvents from "./Pages/MyEvents/MyEvents";
import Header from "./Pages/Shared/Header/Header";
import SingleEventRegister from "./Pages/SingleEventRegister/SingleEventRegister";
import AllEvents from "./Pages/AllEvents/AllEvents";
import SingleEventUpdate from "./Pages/SingleEventUpdate/SingleEventUpdate";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/myEvents" element={<MyEvents />}></Route>
            <Route path="/allEvents" element={<AllEvents />}></Route>
            <Route
              path="/addEvent"
              element={
                <PrivateRoute>
                  <AddEvent />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/events/register/:singleEventId"
              element={<SingleEventRegister />}
            ></Route>
            <Route
              path="/events/update/:singleEventId"
              element={<SingleEventUpdate />}
            ></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
