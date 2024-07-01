import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatScreen from "../components/ChatScreen/index";
import SignInPage from "../components/SignInPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignInPage />
    },
    {
        path: "/chatScreen",
        element: <ChatScreen/>,
    },
]);

const Router = () =>{
    return (
        <RouterProvider router={router} />
    )
}

export default Router;


