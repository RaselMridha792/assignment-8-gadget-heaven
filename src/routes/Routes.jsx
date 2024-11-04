import { createBrowserRouter } from "react-router-dom"

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../Components/component/ProductDetails";

const handleAddProduct = (product)=>{
  console.log(product)

}

const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/product-details/:product_Id',
          element: <ProductDetails handleAddProduct={handleAddProduct}> </ProductDetails>,
          loader: ()=> fetch('./data.json')
        }
        
      ]
    }
  ])

  export default routes;