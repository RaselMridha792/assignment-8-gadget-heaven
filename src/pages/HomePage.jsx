import { Outlet, useLoaderData } from "react-router-dom";
import "../index.css";
import bannerImage from "../assets/banner.jpg";
import CartContainer from "../Components/component/CartContainer";
import Categories from "../component/Categories";

const HomePage = () => {
  const categories = useLoaderData();

  const handleScroll = () =>{
    const div = document.getElementById('scrollDiv');
    div.scrollIntoView({
      behavior:'smooth',
      block: 'start'
    })
  }
  return (
    <>
      <div className="bg-gray-100 px-5">
        <div className="w-full min-h-[664px] bg-purple-500 max-w-screen-2xl mx-auto rounded-xl -mt-20 border border-purple-500">
          <div className="border-white min-h-[664px] w-full border-8 rounded-xl">
            <div className="pt-48 flex flex-col items-center justify-center text-white">
              <h1 className="text-3xl md:text-6xl text-center font-bold w-4/5">
                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
              </h1>
              <p className="text-lg py-5 w-1/2 text-center">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
                <button onClick={handleScroll} className="btn bg-white text-purple-500 px-5 py-3 rounded-3xl">
                  Shop Now
                </button>
            </div>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          <div className="w-3/4 mx-auto -mt-40 rounded-xl border-white border-2">
            <div className="rounded-xl border-transparent ">
              <img
                className="w-full h-[500px] object-cover"
                src={bannerImage}
                alt=""
              />
            </div>
          </div>
          <div id="scrollDiv" className="py-40">
            <h1 className="text-center text-4xl font-bold">
              Explore Cutting-Edge Gadgets
            </h1>

            <div className="flex lg:gap-10 gap-5 mt-20 flex-col md:flex-row">
              {/* left side card  */}
              <div className="md:w-1/4">
                <div className="border bg-white rounded-xl shadow-lg">
                  <ul className="flex flex-col gap-5 w-2/3 mx-auto py-5">

                  {/* dynamic nested component  */}
                  <Categories categories={categories}></Categories>
                  {/* dynamic nested component  */}
                  </ul>
                </div>
              </div>

              {/* right side card  */}
              <div className="md:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                <CartContainer></CartContainer>
                  <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
