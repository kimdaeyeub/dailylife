import { Outlet } from "react-router-dom";
import Navbar from "./views/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#EFF1F6]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
