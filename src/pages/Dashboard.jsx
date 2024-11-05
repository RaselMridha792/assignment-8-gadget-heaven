import { useEffect, useState } from "react";
import { getAllProduct, handleRemoveAll, removeProduct } from "../utillities";
import AddToCart from "../component/AddToCart";
import AddToWishList from "../component/AddToWishList";

const Dashboard = () => {

  const [product, setProduct] = useState([]);
  const [buttonItem, setButtonItem] = useState(true);

  useEffect(()=>{
    const products = getAllProduct();
    setProduct(products)

  },[]);

  const productRemoved = (id) =>{
    removeProduct(id);
    const products = getAllProduct();
    setProduct(products)
  };

  const handleTogleBtn = (state) =>{
    setButtonItem(state)
  };


  // sort product by decending order 
  const handleSortPrice = () =>{
    const sortProducts = [...product].sort((a, b)=> b.price - a.price);
    setProduct(sortProducts);

  };

  // handle clear all product by purchase
  const handlePurchase = () =>{
    handleRemoveAll()
    setProduct([]);
  }
  return (
    <>
      <div className="">
        <div className="text-center bg-purple-600 py-20 text-white">
          <h1 className="text-5xl font-bold pb-3">Dashboard</h1>
          <p className="text-xl w-2/3 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex gap-5 justify-center items-center pt-10 max-w-screen-xl mx-auto">
            <button onClick={()=>handleTogleBtn(true)} 
            
            className={`btn ${buttonItem?'bg-white text-purple-500':'btn-outline text-white'} px-10 rounded-3xl hover:bg-purple-500 hover:text-white font-bold text-xl`}>
              Cart
            </button>
            <button onClick={()=>handleTogleBtn(false)} 
            className={`btn ${buttonItem?'btn-outline text-white':'bg-white text-purple-500'} px-10 font-bold text-xl hover:bg-white hover:text-purple-500 font-bold rounded-3xl`}>
              WishList
            </button>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto">
          
        {/* add to cart components  */}
        {
          buttonItem?<AddToCart product={product} 
          productRemoved={productRemoved} 
          handleSortPrice={handleSortPrice}
          handlePurchase={handlePurchase}
          ></AddToCart>: <AddToWishList></AddToWishList>
        }
        </div>
        

      </div>
    </>
  );
};

export default Dashboard;
