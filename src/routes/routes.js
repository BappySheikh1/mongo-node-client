import { createBrowserRouter } from "react-router-dom";
import AddUser from "../components/AddUser";
import Home from "../components/Home";
import Update from "../components/Update";

export const router=createBrowserRouter([
    {
        path:'/',
        loader:()=>fetch('http://localhost:5000/users'),
        element:<Home />
    },
    {
        path:'/users/add',
        element: <AddUser />
    },
    {
        path:'/update/:id',
        loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`),
        element: <Update />
    }
])