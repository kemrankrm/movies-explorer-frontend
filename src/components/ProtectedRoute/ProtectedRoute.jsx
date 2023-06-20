import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ element: Component, ...props  }) => {
    if (!Component) return null
    return (
        props.loggedIn ? <Component {...props} /> : <Navigate to="/signup" replace/>
    )}

export default ProtectedRouteElement;
