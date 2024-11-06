import { addProduct } from "../utillities";
import { IoCloseCircleOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Wishlist = ({ wishlist, removeFromWishlist }) => {
  const { product_name, image, price, description, product_Id } = wishlist;
  console.log(wishlist);
  return (
    <>
      <div className="border rounded-xl flex items-center justify-between px-5">
        <div className="flex gap-5 px-10 py-5">
          <div>
            <img className="w-44" src={image} alt="" />
          </div>
          <div>
            <h1 className="text-4xl font-bold pb-3">{product_name}</h1>
            <p className="pb-3">{description}</p>
            <p className="font-bold">Price: ${price}</p>
            <Link to='/dashboard'
              onClick={() => {
                addProduct(wishlist);
                removeFromWishlist(product_Id);
              }}
              className="btn bg-purple-500 text-white rounded-3xl mt-3"
            >
              Add to cart
            </Link>
          </div>
        </div>
        <button
          onClick={() => removeFromWishlist(product_Id)}
          className="text-red-500 font-bold text-5xl"
        >
          <IoCloseCircleOutline />
        </button>
      </div>
    </>
  );
};

Wishlist.propTypes = {
  wishlist: PropTypes.array,
  removeFromWishlist: PropTypes.func,
};

export default Wishlist;
