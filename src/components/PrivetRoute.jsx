import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    if(user){
        return children;
    }
    if(loading){
        return <span>Loading.....</span>
    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivetRoute;