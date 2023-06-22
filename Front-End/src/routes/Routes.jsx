import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Trams from "../pages/Shared/Terms/Trams";
import ErrorPage from "../pages/Shared/error/error-page";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chefrecipes/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://the-hungry-hive-server-site-mh-fahim11.vercel.app/chefrecipes/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/terms',
                element: <Trams></Trams>,
            }
        ]
    }
])

export default router;