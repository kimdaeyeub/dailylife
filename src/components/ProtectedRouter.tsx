import React from "react";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }: { children: React.ReactNode }) => {
  const user = auth.currentUser;
  if (user === null) {
    return <Navigate to={"/login"} />;
  } else {
    return children;
  }
};

export default ProtectedRouter;
