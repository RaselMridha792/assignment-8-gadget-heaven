import { GiSettingsKnobs } from "react-icons/gi";
import DashBoardItems from "../Components/component/DashBoardItems";
import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { getAllProduct } from "../utillities";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const AddToCart = ({
  product,
  productRemoved,
  handleSortPrice,
  handlePurchase,
}) => {
  const modalref = useRef(null);
  const productPrice = getAllProduct();

  const navigate = useNavigate()

  // set the total price
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const prices = [...productPrice].map((products) => products.price);
    let sum = 0;
    for (let price of prices) {
      sum += price;
      setTotalPrice(sum);
    }
  }, [product]);

  const resetPrice = () => {
    handlePurchase();
    modalref.current.showModal();
  };

  const closeModal = () => {
    modalref.current.close();
    setTotalPrice(0);
    navigate('/');
  };

  const handleDisableButton = (product) =>{
    if(product.length>0){
      return false
    }else{
      return true
    }
  }

  return (
    <>
      <div>
        <div className="flex justify-between my-10">
          <div>
            <p className="text-2xl font-bold">Cart</p>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-2xl font-bold">Total cost: {totalPrice}</p>
            <button
            disabled={handleDisableButton(product)}
              onClick={handleSortPrice}
              className="btn btn-outline btn-primary text-lg"
            >
              Sort By Price
              <GiSettingsKnobs />
            </button>
            <button disabled={handleDisableButton(product)} onClick={resetPrice} className="btn btn-primary text-lg">
              Purchase
            </button>
          </div>

          {/* show items  */}
        </div>
        <div className="flex flex-col gap-5 my-20">
          {product.map((items) => (
            <DashBoardItems
              key={items.product_Id}
              items={items}
              productRemoved={productRemoved}
            ></DashBoardItems>
          ))}
        </div>
      </div>
      <div>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <dialog ref={modalref} className="modal">
          <div className="modal-box">
            <div className="flex flex-col items-center justify-center">
              <p className="py-4 text-5xl text-green-500">
                <IoIosCheckmarkCircle />
              </p>
              <p className="text-4xl">Payment SuccessFully</p>
              <p className="text-gray-500">thanks for parchasing</p>
              <p className="text-gray-500">total:{totalPrice}</p>
            <div className="modal-action w-full">
              <div onClick={closeModal} className="w-full">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn bg-purple-500 text-white w-full text-xl font-bold">Close</button>
              </div>
            </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

AddToCart.propTypes = {
  product: PropTypes.array,
  productRemoved: PropTypes.func,
  handleSortPrice: PropTypes.func,
  handlePurchase: PropTypes.func,
};

export default AddToCart;
