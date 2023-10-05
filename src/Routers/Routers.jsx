import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import PrivetRouter from "./PrivetRouter";

const Routers = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch('/news.json')
            },
            {
                path:'/news/:id',
                element: <PrivetRouter>  <NewsDetails></NewsDetails> </PrivetRouter>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>,
            }
        ]
    }
])

export default Routers;