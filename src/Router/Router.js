import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Projectpage from "../Pages/projectpage/Projectpage";


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
            path: '/projects/:id',
            element: <Projectpage></Projectpage>,
            loader: ({params})=> fetch(`http://localhost:5000/projects/${params.id}`)
        }
     ]
    }
])