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
import Movies from "../Home/Movies";
import ViewMovieDetails from "../Home/ViewMovieDetails";
import UpdateAMovie from "../Dashboard-Component/Upadate-A-Movie/UpdateAMovie";
import UpdateProfile from "../Dashboard-Component/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/all-movies",
        element: <Movies></Movies>,
      },
      {
        path: "/view-details/:id",
        element: <ViewMovieDetails></ViewMovieDetails>,
        loader: ({ params }) =>
          fetch(
            `https://cine-flix-server-phi.vercel.app/singleMovies/${params.id}`
          ),
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
    path: "/dashboard/",
    element: (
      <PrivetRoutes>
        <Dashboard></Dashboard>
      </PrivetRoutes>
    ),
    children: [
      {
        path: "/dashboard/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard/update-profile/:id",
        element: <UpdateProfile></UpdateProfile>,
        loader: ({ params }) =>
          fetch(
            `https://cine-flix-server-phi.vercel.app/users/get/${params.id}`
          ),
      },
      {
        path: "/dashboard/add-a-movie",
        element: <AddAMovie></AddAMovie>,
      },
      {
        path: "/dashboard/my-all-movies",
        element: <MyAllMovie></MyAllMovie>,
      },
      {
        path: "/dashboard/update-movie/:id",
        element: <UpdateAMovie></UpdateAMovie>,
        loader: ({ params }) =>
          fetch(
            `https://cine-flix-server-phi.vercel.app/singleMovies/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
