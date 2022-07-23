import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const PrivateRoute = (props: any) => {
  const { loggedIn, logIn } = useAuth();

  //   const token = localStorage.getItem("auth");

  //   console.log("token", token);
  console.log("Logged in: ", loggedIn);

  return <>{loggedIn ? <Outlet {...props} /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
