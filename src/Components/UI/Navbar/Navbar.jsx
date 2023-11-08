import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <ul>
                <li><Link to="/reports"><span><i className="fa-solid fa-house"></i></span><span>Отчеты</span></Link></li>
                <li><Link to="/cameras"><span><i className="fa-solid fa-eye"></i></span><span>Камеры</span></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;