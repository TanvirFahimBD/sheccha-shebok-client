import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

//TODO: email & admin condition not working at the same time. Admin fetch slow(FAILED)

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, isLoading, admin } = useAuth();

  if (isLoading) {
    return < CircularProgress />;
  }

  if (user?.email || admin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default AdminRoute;
