import { Outlet } from "react-router-dom";
import Navbar from "./views/Navbar";

const Layout = () => {
  return (
    <div className="h-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
