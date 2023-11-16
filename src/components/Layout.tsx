import { Outlet } from "react-router-dom";
import Navbar from "./views/Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#1F2330]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
