import React from 'react';
import Input from "../Components/UI/Input/Input";
import Button from "../Components/UI/button/Button";
import ApiService from "../API/ApiService";
import Cookies from "js-cookie";
import {toast, Toaster} from "react-hot-toast";

const Admins = () => {

    const add = async event => {
        event.preventDefault();
        const admin_login = event.target.admin_login.value
        const admin_password = event.target.admin_password.value
        const rep_password = event.target.rep_password.value
        if (admin_password !== rep_password){
            toast.error("Пароли не совпадают :(")
            return false;
        }
        if (admin_login.trim() === "" || admin_password.trim() === ""){
            toast.error("Неверный формат данных :(")
            return false;
        }
        try {
            const response = await ApiService.admin_add(admin_login, admin_password)
            if (response.data.error !== undefined){
                toast.error("Такой пользователь уже существует")
                event.target.admin_login.value = ""
                event.target.admin_password.value = ""
                event.target.rep_password.value = ""
            } else {
                toast.success("Success")
                event.target.admin_login.value = ""
                event.target.admin_password.value = ""
                event.target.rep_password.value = ""
            }
        } catch (e){
            toast.error("Такой пользователь уже существует")
            setTimeout(()=>{
                window.location.reload()
            }, 1000)
        }


    }


    return (
        <main className="admins">
            <div className="clm">
                <h2>Добавление администратора</h2>
                <form onSubmit={add}>
                    <div><label>Login</label> <Input autoComplete="off" type="text" name="admin_login" /></div>
                    <div><label>Password</label> <input autoComplete="off" type="password" name="admin_password" /></div>
                    <div><label>Repeat password</label> <input autoComplete="off" type="password" name="rep_password" /></div>
                    <Button>Save</Button>
                </form>
            </div>
            <Toaster position="bottom-right"/>
        </main>
    );
};

export default Admins;