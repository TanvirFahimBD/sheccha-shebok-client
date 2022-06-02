import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  } else {
    if (user?.email) {
      return children;
    } else {
      return <Navigate to="/login" state={{ from: location }}></Navigate>;
    }
  }
};

export default PrivateRoute;
