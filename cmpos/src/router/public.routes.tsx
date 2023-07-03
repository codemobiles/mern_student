import { Navigate, Outlet, useLocation } from "react-router-dom";

type Props = {
  isAuthented: boolean;
};
const PublicRoutes = ({ isAuthented }: Props) => {
  const location = useLocation();
  console.log(location.pathname);

  return isAuthented ? <Navigate to="/report" /> : <Outlet />;
};

export default PublicRoutes;
