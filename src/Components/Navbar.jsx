import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname)

  const navbarColor =
    location.pathname === '/' ?'bg-opacity-0': 'text-black';

    const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/static'>Statistics</NavLink></li>
    <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>
  return (
    <>
      <div className={`${navbarColor} navbar max-w-screen-xl mx-auto pt-5`}>
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
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
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
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-2 rounded-full">
            <Link to='/wishlist'><img className="w-5" src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000" alt="" /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
