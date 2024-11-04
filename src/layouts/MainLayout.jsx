import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
