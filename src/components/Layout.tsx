import { Outlet } from "react-router-dom";
import Navbar from "./views/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
