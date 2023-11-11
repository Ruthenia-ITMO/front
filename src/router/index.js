import Login from "../pages/Login";
import Main from "../pages/Main";
import Cameras from "../pages/Cameras";
import TradeIdPage from "../pages/TradeIdPage";
import Services from "../pages/Services";
import StreamIdPage from "../pages/StreamIdPage";
import Admins from "../pages/Admins";
import StreamAdd from "../pages/StreamAdd";
import ServiceAdd from "../pages/ServiceAdd";

export const privateRoutes = [
    {path: '/main', component: Main, exact: true},
    {path: '/cameras', component: Cameras, exact: true},
    {path: '/trade/:id', component: TradeIdPage, exact: true},
    {path: '/stream/:id', component: StreamIdPage, exact: true},
    {path: '/services', component: Services, exact: true},
    {path: '/admin_add', component: Admins, exact: true},
    {path: '/stream_add', component: StreamAdd, exact: true},
    {path: '/service_add', component: ServiceAdd, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
]