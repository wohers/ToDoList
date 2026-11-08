import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { LayoutWithSlider } from "../layouts/LayoutWithSlider";
import {
  Completed,
  Incoming,
  LoginPage,
  RegisterPage,
  Today,
} from "../../pages";
import { Upcoming } from "../../pages/upcoming/Upcoming";
import { useLayoutEffect } from "react";

export const Router = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    const publicRoutes = ["/login", "/register"];
    const currentPath = location.pathname;

    if (!token && !publicRoutes.includes(currentPath)) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<LayoutWithSlider />}>
        <Route path="/today" element={<Today />} />
        <Route path="/completed" element={<Completed />} />
        <Route path="/incoming" element={<Incoming />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="*" element={<Navigate to="/today" replace />} />
      </Route>
    </Routes>
  );
};
