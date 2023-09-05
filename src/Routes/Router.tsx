import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

export default Router;
