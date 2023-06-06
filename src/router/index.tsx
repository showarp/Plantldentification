import * as React from "react";
import { useRoutes, RouteObject, Navigate} from "react-router-dom";
import Layout from '../views/layout'
import Home from '../views/home';
import User from '../views/user';
import Login from '../views/login';
 
export const router_item:Array<object> = [
    { 
        path: "/", 
        label:"首页", 
        key: "/",
        element: <Navigate to="/login" />
    },
    { 
        path: "/login", 
        label:"登录", 
        key: "login",
        element: <Login/>
    },
    {
        path: '/layout',
        element: <Layout />,
        label: " 控制台",
        key: "layout",
        children: [
            {
                path: 'user',
                key:"user" ,
                label:"用户" ,
                element: <User />,
                children: [
                    { path: 'user1', key:"user1" , label:"用户1" , element: <User />},
                    { path: 'home1', key:"home1" , label:"首页1" , element: <Home />},
                ]
            },
            { path: 'home', key:"home" , label:"首页" , element: <Home />},
        ]
    },
]


const GetRouters = () => {
    const routes:any = useRoutes(router_item)
    return routes;
}

export default GetRouters;