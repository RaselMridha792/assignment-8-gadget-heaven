import { Link } from "react-router-dom";
import "../index.css";
import bannerImage from "../assets/banner.jpg";

const HomePage = () => {

  return (
    <>
      <div className="bg-gray-100">
      <div className="w-full min-h-[664px] bg-purple-500 max-w-screen-2xl mx-auto rounded-xl -mt-20 border border-purple-500">
        <div className="border-white min-h-[664px] w-full border-8 rounded-xl">
          <div className="pt-48 flex flex-col items-center justify-center text-white">
            <h1 className="text-3xl md:text-6xl text-center font-bold w-4/5">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-lg py-5 w-1/2 text-center">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <Link>
              <button className="btn bg-white text-purple-500 px-5 py-3 rounded-3xl">
                Shop Now
              </button>
            </Link>
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
        <div className="py-40">
          <h1 className="text-center text-4xl font-bold">
            Explore Cutting-Edge Gadgets
          </h1>

          <div className="flex gap-10 mt-20">
          {/* left side card  */}
            <div className="w-1/4">
            <div className="border bg-white rounded-xl shadow-lg">
              <ul className="flex flex-col gap-5 w-2/3 mx-auto py-5">
                <li className="btn btn-primary rounded-3xl"><button>All Product</button></li>
                <li className="btn btn-primary rounded-3xl"><button>All Product</button></li>
                <li className="btn btn-primary rounded-3xl"><button>All Product</button></li>
                <li className="btn btn-primary rounded-3xl"><button>All Product</button></li>
                <li className="btn btn-primary rounded-3xl"><button>All Product</button></li>
                <li className="btn btn-primary rounded-3xl"><button>All Product</button></li>
              </ul>
              </div>            
            </div>

            {/* right side card  */}
            <div className="w-3/4 grid grid-cols-3 gap-5">
              <div className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                  </div>
                </div>
              </div>
              <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  Shoes!
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomePage;
