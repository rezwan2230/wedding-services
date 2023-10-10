import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    const location = useLocation()
    if(loader){
        return <span className="loading loading-spinner loading-md"></span>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;

