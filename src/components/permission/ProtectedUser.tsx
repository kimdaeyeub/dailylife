import React from "react";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

const ProtectedUser = ({ children }: { children: React.ReactNode }) => {
  const user = auth.currentUser;
  if (user === null) {
    return children;
  } else {
    return <Navigate to={"/user/error"} />;
  }
};

export default ProtectedUser;
