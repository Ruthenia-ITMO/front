import Login from "../pages/Login";
import Main from "../pages/Main";
import Cameras from "../pages/Cameras";

export const privateRoutes = [
    {path: '/main', component: Main, exact: true},
    {path: '/cameras', component: Cameras, exact: true},
    {path: '', component: Main, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]