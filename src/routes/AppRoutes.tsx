import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import AuthLayout from "../layout/AuthLayout";
import AdminDashboard from "../pages/admin/admin_dashboard/AdminDashboard";
import LoginPage from "../pages/login/LoginPage";
import ParentsDashboard from "../pages/parents/parents_dashboard/ParentsDashboard";
import StudentsDashboard from "../pages/student/students_dashboard/StudentsDashboard";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />{" "}
      </Route>

      {/* Protected Routes (With Navbar & Sidebar) */}
      <Route element={<DefaultLayout />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/parents-dashboard" element={<ParentsDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/students-dashboard" element={<StudentsDashboard />} />
        {/* Add more protected routes here */}
      </Route>

      {/* Redirect all unknown routes to login */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRoutes;
