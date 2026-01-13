import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const hasAccess = !!import.meta.env.VITE_WEBSITE_STATIC_TOKEN;

  if (!hasAccess) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
