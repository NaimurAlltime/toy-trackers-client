import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Home/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddToy from "../pages/Toys/AddToy/AddToy";
import MyToys from "../pages/Toys/MyToys/MyToys";
import Toys from "../pages/Toys/Toys/Toys";
import UpdateToy from "../pages/Toys/UpdateToy/UpdateToy";
import Details from "./../pages/Toys/Details/Details";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/toys",
        element: <Toys></Toys>,
        // loader: () => fetch("https://toy-trackers-server.vercel.app/toys"),
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toy-trackers-server.vercel.app/toy/${params.id}`),
      },
      {
        path: "/add-toy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/toy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://toy-trackers-server.vercel.app/toy/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blogs",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
