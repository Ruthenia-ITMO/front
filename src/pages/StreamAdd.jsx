import React from 'react';
import Input from "../Components/UI/Input/Input";
import Button from "../Components/UI/button/Button";
import {toast, Toaster} from "react-hot-toast";
import ApiService from "../API/ApiService";

const StreamAdd = () => {

    const add = async event => {
        event.preventDefault();
        const stream_name = event.target.stream_name.value
        const stream_rtsp = event.target.stream_rtsp.value
        if (stream_name.trim() === "" || stream_rtsp.trim() === ""){
            toast.error("Неверный формат данных :(")
            return false;
        }
        try {
            const response = await ApiService.stream_add(stream_name, stream_rtsp)
            if (response.data.error !== undefined){
                toast.error("Такая камера уже существует")
                event.target.stream_name.value = ""
                event.target.stream_rtsp.value = ""
            } else {
                toast.success("Success")
                event.target.stream_name.value = ""
                event.target.stream_rtsp.value = ""
            }
        } catch (e){
            toast.error("Такая камера уже существует")
            setTimeout(()=>{
                window.location.reload()
            }, 1000)
        }


    }


    return (
        <main className="admins">
            <div className="clm">
                <h2>Добавление камеры</h2>
                <form onSubmit={add}>
                    <div><label>Name</label> <Input autoComplete="off" type="text" name="stream_name" /></div>
                    <div><label>Rtsp</label> <Input autoComplete="off" type="text" name="stream_rtsp" /></div>
                    <Button>Save</Button>
                </form>
            </div>
            <Toaster position="bottom-right"/>
        </main>
    );
};

export default StreamAdd;