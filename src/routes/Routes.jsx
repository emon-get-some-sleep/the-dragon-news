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
import Terms from "../pages/Shared/Terms/Terms";

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
            },
            {
                path: 'terms',
                element: <Terms></Terms>
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
                loader: ({params}) => fetch(`https://the-news-dragon-server-emon-get-some-sleep.vercel.app/categories/${params.id}`)
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
                loader: ({params}) => fetch(`https://the-news-dragon-server-emon-get-some-sleep.vercel.app/news/${params.id}`)
            }

        ]
    }
])

export default router;