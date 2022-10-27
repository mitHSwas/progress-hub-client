import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import CoursesDetails from "../../components/CoursesDetails/CoursesDetails";
import FAQ from "../../components/FAQ/FAQ";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import NotFound from "../../components/NotFound/NotFound";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import Register from "../../components/Register/Register";
import TermsAndConditions from "../../components/TermsAndConditions/TermsAndConditions";
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
                element: <Courses></Courses>,
                loader: () => fetch("https://progress-hub-server.vercel.app/category")
            },
            {
                path: "/courseDetails/:id",
                element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://progress-hub-server.vercel.app/courseDetails/${params.id}`)
            },
            {
                path: "/category/:id",
                element: <CoursesDetails></CoursesDetails>,
                loader: ({ params }) => fetch(`https://progress-hub-server.vercel.app/category/${params.id}`)
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
                path: "/terms",
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: "*",
                element: <NotFound></NotFound>
            }
        ]
    }
])