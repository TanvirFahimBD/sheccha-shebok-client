import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { user, isLoading, admin } = useAuth();
  if (isLoading) {
    return < CircularProgress />;
  } else {
    if (user?.email && admin) {
      return children;
    } else {
      return <Navigate to="/" state={{ from: location }}></Navigate>;
    }
  }
};

export default AdminRoute;
