import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import { isAuthenticated } from "../utils/auth";

// Auth kontrol komponenti
const ProtectedRoute = ({ children }) => {
  const authed = isAuthenticated();
  return authed ? children : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
