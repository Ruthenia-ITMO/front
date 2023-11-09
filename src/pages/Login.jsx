import React, {useContext, useState} from 'react';
import Button from "../Components/UI/button/Button";
import Input from "../Components/UI/Input/Input";
import {AuthContext} from "../context";
import Cookies from "js-cookie";
import "../styles/login.css"

const Login = () => {
    const {isAuth, setIsAuth, setIsLoading} = useContext(AuthContext);
    const errorAlert = useState('')
    const login = event => {
        event.preventDefault();
        const admin_login = event.target.login.value
        const admin_password = event.target.password.value
        if (admin_login == "admin" && admin_password == "admin"){
            setIsAuth(true);
            Cookies.set("auth", "true")
        } else{
            document.getElementById("alert").innerHTML = "Чтобы получить пароль, свяжитесь с администрацией"
        }

    }

    return (
        <div className="login">
            <form onSubmit={login}>
                <div className="login_header">
                    <span>Control panel</span>
                </div>
                <div className="login_body">
                    <div id="alert" className="login_alert"></div>
                    <div><label>Login</label> <Input type="text" name="login" /></div>
                    <div><label>Password</label> <input type="password" name="password" /></div>
                    <Button>Save</Button>
                </div>
            </form>
        </div>

    );
};

export default Login;