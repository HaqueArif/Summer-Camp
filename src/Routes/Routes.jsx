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
import Dashboard from "../Pages/Private/Dashboard/Dashboard";
import SelectedClass from "../Pages/Private/Dashboard/SelectedClass/SelectedClass";
import EnrolledClasses from "../Pages/Private/Dashboard/EnrolledClasses/EnrolledClasses";
import AllUsers from "../Pages/Private/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import ManageClass from "../Pages/Private/Dashboard/ManageClass/ManageClass";
import Payment from "../Pages/Private/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Private/Dashboard/PaymentHistory/PaymentHistory";
import AddClass from "../Pages/Private/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Private/Dashboard/MyClasses/MyClasses";
import InstructorRoutes from "./InstructorRoutes";


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
        
        
      ],
      
    },
    {
      path: 'dashboard/',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'selectedClasses',
          element:<SelectedClass></SelectedClass>
        },
        {
          path:'enrolledClasses',
          element:<EnrolledClasses></EnrolledClasses>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path: 'manageUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: 'manageClasses',
          element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        {
          path: 'addClasses',
          element: <InstructorRoutes><AddClass></AddClass></InstructorRoutes>
        },
        {
          path: 'myClasses',
          element: <InstructorRoutes><MyClasses></MyClasses></InstructorRoutes>
        },
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
    

  ]);