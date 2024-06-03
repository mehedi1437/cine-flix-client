
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivetRoutes = ({children}) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate to='/log-in' state={{from:location}} replace={true}></Navigate>
};

export default PrivetRoutes;