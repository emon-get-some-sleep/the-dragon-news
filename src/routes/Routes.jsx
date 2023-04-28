import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayouts from "../Layout/LoginLayouts";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayouts></LoginLayouts>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>,

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]

    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
          
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
          
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }

        ]
    }
])

export default router;