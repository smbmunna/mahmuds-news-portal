import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import AllNews from "../pages/AllNews/AllNews";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true, 
                Component: Home
            },
            {
                path: '/allNews',
                Component: AllNews
            }
        ]
    },
]);
