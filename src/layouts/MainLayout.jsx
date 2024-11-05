import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { createContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const CartContext = createContext([]);
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      '/': 'Gadget | Gadget Heaven',
      '/category/:category': 'Gadget | category',
      '/dashboard': 'Dashboard | Gadget Heaven',
      '/product-details/': 'Details | Gadget Heaven',
      '/static': 'Statistic | Gadget Heaven'
    };
    document.title = pageTitles[location.pathname] || 'Gadget | Gadget Heaven';
  }, [location]);

  return (
    <>
      <Toaster />
      <Navbar />
      <div className="">
        <CartContext.Provider value={[]}>
          <Outlet />
        </CartContext.Provider>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
