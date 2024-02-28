import { ReactNode } from "react";

import { Navigate, useLocation } from "react-router-dom";
import Context from "../../Hook/useContext";
import useAdmin from "../../Hook/useAdmin";
interface AdminRouteProb {
  children: ReactNode;
}

const AdminRoute = ({ children }: AdminRouteProb) => {
  const { user, loading } = Context();
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin();

  if (loading || isAdminLoading)
    return (
      <div className="flex justify-center mx-auto mt-20">
        <span className="loading loading-spinner text-primary"></span>
        <span className="loading loading-spinner text-secondary"></span>
        <span className="loading loading-spinner text-accent"></span>
        <span className="loading loading-spinner text-neutral"></span>
        <span className="loading loading-spinner text-info"></span>
        <span className="loading loading-spinner text-success"></span>
        <span className="loading loading-spinner text-warning"></span>
        <span className="loading loading-spinner text-error"></span>
      </div>
    );

  if (user && isAdmin.isAdmin) {
    return children;
  }
  return <Navigate to="/" state={location.pathname} replace />;
};

export default AdminRoute;
