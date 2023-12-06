import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
    const {user, loading} = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();
    if (loading || isAdminLoading) {
      return <span className='loading loading-ring loading-lg'></span>;
    }
    if (user && isAdmin) {
      return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default AdminRoute; 