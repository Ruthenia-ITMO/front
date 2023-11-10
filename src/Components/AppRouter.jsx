import React, {useContext} from 'react';
import Loader from "./UI/Loader/Loader";
import {AuthContext} from "../context";
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if (isLoading){
        return <Loader />
    }

    return (
        isAuth
            ?
                <Routes>
                    {privateRoutes.map(route=>
                        <Route key={route.path} path={route.path} Component={route.component}  />
                    )}
                    <Route path="*"  element={<Navigate to="/main" replace={true} />} />

                </Routes>

            :
                <Routes>
                    {publicRoutes.map(route=>
                        <Route key={route.path}  path={route.path}  Component={route.component}  />
                    )}
                    <Route path="*"  element={<Navigate to="/login" replace={true} />} />
                </Routes>

    );
};

export default AppRouter;