import React from "react";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }: { children: React.ReactNode }) => {
  const user = auth.currentUser;
  console.log(user);
  if (user !== null) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRouter;
