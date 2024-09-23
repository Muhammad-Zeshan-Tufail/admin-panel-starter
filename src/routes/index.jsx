import { Navigate } from "react-router-dom";

// ========LAYOUTS=========
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/MainLayout";

// ========ROUTE PROTECTION=========
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";

// =====IMPORT PAGES======
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/forgot-password";
import Dashboard from "../pages/protected/dashboard";
import Users from "../pages/protected/users";

export const routes = [
  {
    path: "/auth/",
    element: (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      { index: true, element: <Login /> },
      { path: "login", element: <Login /> },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },
  {
    path: "/dashboard/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/dashboard/stats" replace /> },
      { path: "stats", element: <Dashboard /> },
      { path: "users", element: <Users /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/auth/login" replace />,
  },
];
