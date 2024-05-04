import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Checkout from "../pages/Checkout";
import Bookings from "../pages/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/checkout/:serviceID",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.serviceID}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoutes>
            <Bookings />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
