import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white min-h-screen pt-15">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
