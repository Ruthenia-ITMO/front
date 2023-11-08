import React, {useContext} from 'react';
import Button from "../Components/UI/button/Button";
import Input from "../Components/UI/Input/Input";
import {AuthContext} from "../context";
import Cookies from "js-cookie";

const Login = () => {
    const {isAuth, setIsAuth, setIsLoading} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        Cookies.set("auth", "true")
    }

    return (
        <div className="login">
            <form onSubmit={login}>
                <div className="login_header">
                    <span>Control panel</span>
                </div>
                <div className="login_body">
                    <div><label>Login</label> <Input type="text" name="login" /></div>
                    <div><label>Password</label> <input type="password" name="password" /></div>
                    <Button>Save</Button>
                </div>
            </form>
        </div>

    );
};

export default Login;