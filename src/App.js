import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import AddUsers from "./Pages/AddUsers/AddUsers";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Header from "./Pages/Shared/Header/Header";
import SingleUser from "./Pages/SingleUser/SingleUser";
import Users from "./Pages/Users/Users";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route
              path="/adduser"
              element={
                <PrivateRoute>
                  <AddUsers />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/users/update/:singleUserId"
              element={<SingleUser />}
            ></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
