import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  return user ? <Navigate to="/dashboard/stats" /> : children;
};
export default PublicRoute;
