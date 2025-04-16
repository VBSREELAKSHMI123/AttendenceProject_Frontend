import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = {
    children: ReactNode;
    allowedroles:string[]
};


export const ProtectedRoute = ({ children,allowedroles=[] }: ProtectedRouteProps) => {
const {isAuthenticated,user} = useSelector((state:any)=>state.loginState) 
    if(!isAuthenticated)    {
        return  <Navigate to={"/login"} />
    }
  if (allowedroles.includes(user.role)) {
     return children
  }



return <h2>PAGE NOT FOUND</h2>
}
