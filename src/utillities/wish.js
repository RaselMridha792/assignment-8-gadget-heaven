import toast from "react-hot-toast";
const getAllWishlist = () => {
    const all = localStorage.getItem("WishlistItem");
    if (all) {
      const products = JSON.parse(all);
      return products;
    } else {
      return [];
    }
  };


  const AddWishlist = (product) => {
    // get all product from local storage
  
    const WishlistItem = getAllWishlist();
    const isExist = WishlistItem.find(
      (item) => item.product_Id == product.product_Id
    );
    if (isExist) {
      return toast.error("Product already exist on wishList");
    }
    WishlistItem.push(product);
    console.log(product)
    localStorage.setItem("WishlistItem", JSON.stringify(WishlistItem));
    toast.success("Product Added on Wishlist successfully");
  };


  const removeWishlist = (id) => {
    const productItem = getAllWishlist();
    const remianedProduct = productItem.filter(
      (product) => product.product_Id != id
    );
    localStorage.setItem("WishlistItem", JSON.stringify(remianedProduct));
    toast.success("Product removed successfully from wishlist");
  };
  

  export {AddWishlist, getAllWishlist, removeWishlist}