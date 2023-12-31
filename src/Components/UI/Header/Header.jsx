import React, {useContext, useState} from 'react';
import classes from "./Header.module.css";
import Cookies from "js-cookie";
import {AuthContext, SERVER_NAME} from "../../../context";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const [visible, setVisible] = useState()
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const logout = () => {
        setIsAuth(false)
        Cookies.remove('access_token')
        navigate("/login")
    }
    return (
        <header className={classes.header}>
            <div>
                <div>
                    <img src={SERVER_NAME + "/assets/img/logo.png"} alt="logo"/>
                    <h1>Ruthenia</h1>
                </div>
                <div onClick={() => setVisible(classes.active)}>
                    <h6>settings</h6>
                    <i className="fa-solid fa-angle-down"></i>
                </div>
                <div className={[classes.account_menu, visible].join(' ')} onClick={() => setVisible(null)}>
                    <div onClick={() => logout()}>
                        <ul>
                            <li><span><i className="fa-solid fa-right-from-bracket"></i><span>Выйти</span></span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;