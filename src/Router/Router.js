import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import BeautyZone from "../Pages/BeautyZone/BeautyZone";
import BookBazar from "../Pages/BookBazar/BookBazar";
import Home from "../Pages/Home/Home/Home";
import Learning from "../Pages/Learning/Learning";


export const router = createBrowserRouter([
    {
     path: '/',
     element: <Main></Main>,
     children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/book-bazar',
            element: <BookBazar></BookBazar>
        },
        {
            path: '/beauty',
            element: <BeautyZone></BeautyZone>
        },
        {
            path: '/learning',
            element: <Learning></Learning>
        }
     ]
    }
])