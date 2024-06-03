import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Dashboard from "../Layout/Dashboard";
import PrivetRoutes from "./PriverRoutes";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../Home/HomePage";
import Home from "../Dashboard-Component/DashboardHome/Home";
import AddAMovie from "../Dashboard-Component/Add-A-Movie/AddAMovie";
import MyAllMovie from "../Dashboard-Component/MyAllMovie/MyAllMovie";
import UpdateAMovie from "../Dashboard-Component/Upadate-A-Movie/UpdateAMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path:'/',
            element:<HomePage></HomePage>
        },
      {
        path: "/log-in",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoutes>
        <Dashboard></Dashboard>
      </PrivetRoutes>
      
    ),
    children:[
      {
        path:'/dashboard/home',
        element:<Home></Home>
      },
      {
        path:'/dashboard/add-a-movie',
        element:<AddAMovie></AddAMovie>
      },
      {
        path:'/dashboard/my-all-movies',
        element:<MyAllMovie></MyAllMovie>
      },
      {
        path:'/dashboard/update-a-movie',
        element:<UpdateAMovie></UpdateAMovie>
      }
    ]
  },
]);

export default router;
