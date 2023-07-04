import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ element: Component, ...props  }) => {
    if (!Component || props.loggedIn === null) return null

    return (
        props.loggedIn ? <Component {...props} /> : <Navigate to="/" replace/>
    )}

export default ProtectedRouteElement;
