import { Link, NavLink, useLocation } from "react-router-dom";
import { getAllProduct } from "../utillities";
import { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { getAllWishlist } from "../utillities/wish";

const Navbar = () => {
  const location = useLocation();
  const [addedData, setAddedData] = useState([]);
  const [addedWish, setWish] = useState([]);


  // set the cart number 
  useEffect(()=>{
    const added = getAllProduct();
    const wish = getAllWishlist();
    setWish(wish);
    setAddedData(added);
  },[location.pathname])

  const navbarColor =
    location.pathname === '/' ?'bg-opacity-0': 'text-black';

    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/static'>Statistics</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    <li><NavLink to='/becomeseller'>Become A Seller</NavLink></li>
    </>
  return (
    <>
      <div className={`${navbarColor} navbar max-w-screen-xl mx-auto pt-5 px-10 lg:px-1`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
                {links}
            </ul>
          </div>
          <Link to='/' className={`text-xl ${location.pathname === '/'?'text-white':'text-black'} font-bold capitalize`}>Gadget Heaven</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1 ${location.pathname === '/'?'text-white':'text-black'} text-lg`}>
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {/* cart section  */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle mr-5"
            >
              <div className="indicator">
                <div className="">
                <BsCart3 className="text-4xl bg-gray-200 rounded-full p-1" />
                </div>
                <span className="badge badge-sm indicator-item">{addedData.length}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{addedData.length} Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <Link to='/dashboard' className="btn btn-primary btn-block">
                    View cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
          <div
              tabIndex={0}
              role=""
              className=""
            >            
            <div className="indicator bg-gray-200 p-2 rounded-full">
            <Link to='/dashboard'><img className="w-5" src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000" alt="" /></Link>
            <span className="badge badge-sm indicator-item">{addedWish.length}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
