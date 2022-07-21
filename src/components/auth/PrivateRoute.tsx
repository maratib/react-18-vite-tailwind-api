import { useUserAuth } from "@/context/userAuthContext";
import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

const PrivateRoute = (props: any) => {
    // const isAuth  = false
    const [user, logIn] = useUserAuth();

    console.log(user);


    logIn('abc', 'def');



    const token = localStorage.getItem("auth");

    console.log("token", token);

    return <>{token ? <Outlet {...props} /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;