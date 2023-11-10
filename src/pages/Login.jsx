import React, {useContext, useState} from 'react';
import Button from "../Components/UI/button/Button";
import Input from "../Components/UI/Input/Input";
import {AuthContext} from "../context";
import Cookies from "js-cookie";
import "../styles/login.css"
import ApiService from "../API/ApiService";


const Login = () => {
    const {isAuth, setIsAuth, setIsLoading} = useContext(AuthContext);
    const errorAlert = useState('')
    const login = async event => {
        event.preventDefault();
        const admin_login = event.target.login.value
        const admin_password = event.target.password.value

        try {
            const response = await ApiService.auth(admin_login, admin_password)
            setIsAuth(true);
            Cookies.set("access_token", response.data.access_token)
        } catch (e){
            document.getElementById("alert").innerHTML = "Неверный логин или пароль"
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