import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    const location = useLocation()
    // console.log(location.pathname)

    if (loading) {
        return <div className="w-full flex justify-center items-center h-screen">
            <span className="loading loading-ring w-full"></span>
            </div>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivetRouter.propTypes = {
    children:PropTypes.node
};

export default PrivetRouter;




