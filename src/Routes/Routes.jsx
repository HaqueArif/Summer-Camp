import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Error from "../Pages/Error/Error";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../Pages/Private/Dashboard";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/instructors',
          element: <Instructors></Instructors>
        },
        {
          path:'/classes',
          element: <Classes></Classes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        
        
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    },
    {
      path: '*',
      element: <Error></Error>
    }
    

  ]);