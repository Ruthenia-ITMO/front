import Login from "../pages/Login";
import Main from "../pages/Main";
import Cameras from "../pages/Cameras";
import TradeIdPage from "../pages/TradeIdPage";
import Services from "../pages/Services";

export const privateRoutes = [
    {path: '/main', component: Main, exact: true},
    {path: '/cameras', component: Cameras, exact: true},
    {path: '/trade/:id', component: TradeIdPage, exact: true},
    {path: '/services', component: Services, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]