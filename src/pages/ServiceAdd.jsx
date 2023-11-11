import React, {useState} from 'react';
import Input from "../Components/UI/Input/Input";
import Button from "../Components/UI/button/Button";
import {toast, Toaster} from "react-hot-toast";
import ApiService from "../API/ApiService";
import Modal from "../Components/UI/Modal/Modal";

const ServiceAdd = () => {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('')
    const [token, setToken] = useState('')


    const add = async event => {
        event.preventDefault();
        const service_name = event.target.service_name.value
        if (service_name.trim() === ""){
            toast.error("Неверный формат данных :(")
            return false;
        }
        try {
            const response = await ApiService.service_add(service_name)
            toast.success("Success")
            setName(response.data.name)
            setToken(response.data.token)
            setModal(true)
            event.target.service_name.value = ""
        } catch (e){
            toast.error(e.toString())
            setTimeout(()=>{
                window.location.reload()
            }, 1000)
        }


    }
    return (
        <main className="admins">
            <div className="clm">
                <h2>Добавление сервисов</h2>
                <form onSubmit={add}>
                    <div><label>Name</label> <Input autoComplete="off" type="text" name="service_name" /></div>
                    <Button>Save</Button>
                </form>
            </div>
            <Toaster position="bottom-right"/>
            <Modal visible={modal} setVisible={setModal}>
                <div>
                    <ul>
                        <li><span>Name: </span><span>{name}</span></li>
                        <li><span>Token: </span><span>{token}</span></li>
                    </ul>
                </div>
            </Modal>
        </main>
    );
};

export default ServiceAdd;