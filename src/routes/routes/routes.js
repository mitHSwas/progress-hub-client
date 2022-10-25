import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import Courses from "../../components/Courses/Courses";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import NotFound from "../../components/NotFound/NotFound";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/courses",
                element: <Courses></Courses>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/questions",
                element: <FAQ></FAQ>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "*",
                element: <NotFound></NotFound>
            }
        ]
    }
])