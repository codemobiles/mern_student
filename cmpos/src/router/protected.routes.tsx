import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isAuthented: boolean;
};
const ProtectedRoutes = ({ isAuthented }: Props) => {
  return isAuthented ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
