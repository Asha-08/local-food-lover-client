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
import CardDetails from "../Card/CardDetails";
import FeatureCard from "../Card/FeatureCard";
import FeaturedReview from "../Pages/FeaturedReview";
import EditReview from "../Pages/EditReview";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-reviews",
        element: <AllReviews />,
        loader: () => fetch("https://local-food-server-pi.vercel.app/reviews"),
      },
      {
        path: "/featured-reviews",
        element: <FeaturedReview />,
        // loader:()=> fetch('https://local-food-server-pi.vercel.app/featured-reviews')
      },
      {
        path: "/add-reviews",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/card-details/:id",
        loader: ({ params }) =>
          fetch(`https://local-food-server-pi.vercel.app/reviews/${params.id}`),
        element: (
          <PrivateRoute>
            <CardDetails></CardDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-reviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-review/:id",
        element: (
          <PrivateRoute>
            <EditReview></EditReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://local-food-server-pi.vercel.app/reviews/${params.id}`),
      },
      {
        path: "/my-favorites",
        element: (
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
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
