import { createBrowserRouter } from "react-router-dom"

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";
import ProductDetails from "../Components/component/ProductDetails";
import { createContext } from "react";
import CategoryCards from "../component/CategoryCards";
import Statistic from "../pages/Statistic";


export const CartContext = createContext([]);



const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <HomePage></HomePage>,
          children: [
            {path: '/category/:category',
              element: <CategoryCards></CategoryCards>
            }
          ],
          loader: ()=> fetch('../categories.json')
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/product-details/:product_Id',
          element: <ProductDetails> </ProductDetails>,
          loader: ()=> fetch('../data.json')
        },
        {
          path: '/static',
          element: <Statistic></Statistic>
        }
        
      ]
    }
  ])

  export default routes;




  /**
   * 1. create a context and export it.
   */