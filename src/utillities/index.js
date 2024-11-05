import toast from "react-hot-toast";

const getAllProduct = () => {
  const all = localStorage.getItem("productItem");
  if (all) {
    const products = JSON.parse(all);
    return products;
  } else {
    return [];
  }
};

const addProduct = (product) => {
  // get all product from local storage

  const productItem = getAllProduct();
  const isExist = productItem.find(
    (item) => item.product_Id == product.product_Id
  );
  if (isExist) {
    return toast.error("Product already exist on cart");
  }
  productItem.push(product);
  localStorage.setItem("productItem", JSON.stringify(productItem));
  toast.success("Product Added on Cart successfully");
};

// remove item from ls
const removeProduct = (id) => {
  const productItem = getAllProduct();
  const remianedProduct = productItem.filter(
    (product) => product.product_Id != id
  );
  localStorage.setItem("productItem", JSON.stringify(remianedProduct));
  toast.success("Product removed successfully");
};


const handleRemoveAll = () =>{
  localStorage.setItem("productItem", JSON.stringify([]));
}
export { addProduct, getAllProduct, removeProduct, handleRemoveAll };
