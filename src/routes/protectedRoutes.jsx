/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { React } from "react";

function ProtectedRoute({ redirectPath = "/login", isLogin }) {
  if (!isLogin) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
