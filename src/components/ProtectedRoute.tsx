import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
    children: ReactNode;
    allowedroles: string[]
};


export const ProtectedRoute = ({ children, allowedroles = [] }: ProtectedRouteProps) => {
    const { isAuthenticated, user } = useSelector((state: any) => state.loginState)

    console.log(user);

    const { role, isProfileComplete } = user
    if (!isAuthenticated || role === "") {
        return <Navigate to={"/"} />
    }

    if (role === "user" && !isProfileComplete && location.pathname !== "/complete-profile") {
        return <Navigate to="/complete-profile" replace state={{data:"state value"}} />;
    }
    if (allowedroles.includes(role)) {
        return children
    }



    return <h2>PAGE NOT FOUND</h2>
}
