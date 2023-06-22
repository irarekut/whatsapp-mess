import { React } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/login";
import ProtectedRoute from "./protectedRoutes";
import Main from "../pages/main/main";
import { useSelector } from "react-redux";

function AppRoutes() {
  const isLogin = useSelector((state) => state.loginData.wid);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute isLogin={isLogin} />}>
        <Route path="/" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
