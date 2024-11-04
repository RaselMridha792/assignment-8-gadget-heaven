import { createBrowserRouter } from "react-router-dom"

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../pages/Dashboard";

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
        }
        
      ]
    }
  ])

  export default routes;