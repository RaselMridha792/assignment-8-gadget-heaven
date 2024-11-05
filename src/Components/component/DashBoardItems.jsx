import PropTypes from "prop-types";
import { IoMdCloseCircleOutline } from "react-icons/io";

const DashBoardItems = ({ items, productRemoved }) => {
  const { product_name, image, description, price, product_Id } = items;

  return (
    <>
      <div className="border md:h-64 w-full rounded-xl flex items-center justify-between px-10">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div>
            <img className="w-52 p-5" src={image} alt="" />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-bold">{product_name}</h1>
            <p className="text-xl">{description}</p>
            <p className="text-xl font-bold">price: ${price}</p>
          </div>
        </div>
        <div>
          <button onClick={()=> productRemoved(product_Id)}>
            <IoMdCloseCircleOutline className="text-4xl text-red-500" />
          </button>
        </div>
      </div>
    </>
  );
};

DashBoardItems.propTypes = {
  items: PropTypes.object,
  productRemoved: PropTypes.func
};

export default DashBoardItems;

// {
//     "product_name": "Apple MacBook Pro 16",
//     "product_Id": "1",
//     "image": "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-pro-16-inch-m3-pro-black/macbook-pro-16-inch-m3-pro-black-01-500x500.webp",
//     "price": 2499,
//     "category": "Laptops",
//     "details": [
//         "16-inch screen",
//         "M3 Pro chip",
//         "16GB RAM",
//         "1TB SSD"
//     ],
//     "description": "Powerful performance for creative professionals.",
//     "rating": 4.8,
//     "availability": "In Stock"
// }
