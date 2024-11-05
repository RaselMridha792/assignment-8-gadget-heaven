import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { createContext } from "react";

const MainLayout = () => {
  const CartContext = createContext([]);
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen">
        <CartContext.Provider value={[]}>
          <Outlet></Outlet>
        </CartContext.Provider>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
