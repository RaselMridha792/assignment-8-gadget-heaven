import { NavLink } from "react-router-dom";
import { GiSettingsKnobs } from "react-icons/gi";

const Dashboard = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center bg-purple-500 py-20 text-white">
          <h1 className="text-5xl font-bold pb-3">Dashboard</h1>
          <p className="text-xl w-2/3 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex gap-5 justify-center items-center pt-10">
            <NavLink className="btn btn-primary bg-white text-purple-500 px-10 rounded-3xl hover:bg-purple-500 hover:text-white">
              Cart
            </NavLink>
            <button className="btn btn-outline text-white hover:bg-white hover:text-purple-500 font-bold rounded-3xl">
              WishList
            </button>
          </div>
        </div>

        <div className="flex justify-between my-10">
          <div>
            <p className="text-2xl font-bold">Cart</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-2xl font-bold">Total cost: </p>
            <button className="btn btn-outline btn-primary text-lg">
              Sort By Price
              <GiSettingsKnobs />
            </button>
            <button className="btn btn-primary text-lg">Purchase</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
