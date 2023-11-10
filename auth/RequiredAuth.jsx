import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";

export const RequiredAuth = ({ children }) => {
  const { theUser } = useContext(UserContext);
  console.log(theUser);

  if (!theUser) {
    return <Navigate to="/admin" />;
  }
  return children;
};
