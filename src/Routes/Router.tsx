import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddNew from "../Pages/AddNew";
import AllBooks from "../Pages/AllBooks";
import BookDetails from "../Pages/BookDetails";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import UpdateBook from "../Pages/UpdateBook";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allBooks",
        element: <AllBooks />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/addNew",
        element: <AddNew />,
      },
      {
        path: "/update-book/:id",
        element: <UpdateBook />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Router;
