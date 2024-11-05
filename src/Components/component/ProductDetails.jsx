import { IoCartOutline } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { addProduct, getAllProduct } from "../../utillities";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { products } = useLoaderData();
  const { product_Id } = useParams();
  const id = parseInt(product_Id);
  const [isProduct, setIsProduct] = useState(false);
  const product = products.find((product) => product.product_Id == id);
  const {
    image,
    product_name,
    price,
    details,
    availability,
    rating,
    description,
  } = product;

  useEffect(() => {
    const allProducts = getAllProduct();

    const isExist = allProducts.find(
      (item) => item.product_Id == product.product_Id
    );
    if (isExist) {
      setIsProduct(true);
    }
  }, [products, id]);
  // handle add product btn
  const handleAddProduct = (product) => {
    addProduct(product);
    setIsProduct(true);
  };

  return (
    <>
      <div className="bg-purple-500 text-center pb-64 pt-20">
        <h1 className="text-5xl font-bold text-white">Product Details</h1>
        <p className="text-white w-2/5 py-5 mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="max-w-screen-lg mx-auto bg-white rounded-xl shadow-lg -mt-52 flex gap-5">
        <div className="rounded-xl m-5">
          <img src={image} alt="" />
        </div>
        <div className="py-10">
          <h1 className="text-4xl font-bold pb-5">{product_name}</h1>
          <p className="text-2xl font-bold pb-5">Price: ${price}</p>
          <button className="text-green-500 mb-5 px-5 py-1 border-2 border-green-400 bg-green-100 rounded-3xl">
            {availability}
          </button>
          <p className="text-xl py-2">{description}</p>
          <p className="text-2xl font-bold pb-3">Specification:</p>
          {details.map((detail, idx) => (
            <p className="text-xl" key={idx}>
              {detail}
            </p>
          ))}
          <p className="text-2xl font-bold py-3">rating</p>
          {/* rating start here */}
          <div className="flex gap-3 items-center">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-200"
              />
            </div>
            <p className="text-2xl">{rating}</p>
          </div>
          <div className="flex gap-2 items-center py-5">
            <button
              disabled={isProduct}
              onClick={() => handleAddProduct(product)}
              className="btn bg-purple-600 text-white rounded-3xl"
            >
              Add to Card <IoCartOutline className="text-2xl" />
            </button>
            <div className="bg-gray-200 p-2 rounded-full">
              <Link to="/wishlist">
                <img
                  className="w-8"
                  src="https://img.icons8.com/?size=100&id=86721&format=png&color=000000"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
