import { createBrowserRouter } from "react-router";
import Mainlayout from "../layout/Mainlayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllReviews from "../Pages/AllReviews";
import AddReview from "../Pages/AddReview";
import MyReviews from "../Pages/MyReviews";
import MyFavorites from "../Pages/MyFavorites";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
        {
           path: "/",
        element: <Home />, 
        },
        {
            path:"/all-reviews",
            element:<AllReviews />
        },
        {
            path:"/add-reviews",
            element:(
                <PrivateRoute>
                    <AddReview />
                </PrivateRoute>
            ),
        },
        {
            path:"/my-reviews",
            element:(
                <PrivateRoute>
                    <MyReviews />
                </PrivateRoute>
            ),
        },
        {
            path:"/my-favorites",
            element:(
                <PrivateRoute>
                    <MyFavorites />
                </PrivateRoute>
            ),
        },
        {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ]
  },
]);