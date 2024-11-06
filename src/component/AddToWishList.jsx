import { useEffect, useState } from "react";
import { getAllWishlist, removeWishlist } from "../utillities/wish";
import Wishlist from "./Wishlist";

const AddToWishList = () => {
  const [wish, setWish] = useState([]);

  useEffect(() => {
    const allWishlist = getAllWishlist();
    setWish(allWishlist);
  }, []);
  console.log(wish);

  const removeFromWishlist = (id) =>{
    const allWishlist = getAllWishlist();
    setWish(allWishlist);
    removeWishlist(id)
  }
  return (
    <>
      <div className="max-w-screen-xl pt-10">
        <h1 className="text-4xl font-bold pb-10">WishList</h1>
        <div>
          <div className="flex flex-col gap-5">
            {wish.map((wishlist) => (
              <Wishlist
                key={wishlist.product_Id}
                wishlist={wishlist}
                removeFromWishlist={removeFromWishlist}
              ></Wishlist>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToWishList;
