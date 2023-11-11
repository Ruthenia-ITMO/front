import axios from "axios";
import {useState} from "react";
import Cookies from "js-cookie";
export default class ApiService {
    static async getAll(limit= 9, page = 1){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const response = await axios.get('http://45.9.24.232/frames/', {
            params: {
                per_page: limit,
                page: page
            }
        });
        return response
    }

    static async auth(login, password){
        const data = { name: login, password: password };
        const response = await axios.post('http://45.9.24.232/users/login', data);
        return response;
    }

    static async admin_add(login, password){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const data = { name: login, password: password, is_admin: true };
        const response = await axios.post('http://45.9.24.232/users/add', data);
        return response;
    }

    static async stream_add(name, rtsp){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const data = { name: name, rtsp_url: rtsp };
        const response = await axios.post('http://45.9.24.232/streams/add', data);
        return response;
    }

    static async service_add(name){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const data = { name: name};
        const response = await axios.post('http://45.9.24.232/services/add', data);
        return response;
    }

    static async validity(id, valid){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const data = { frame_id : id, is_valid: valid };
        const response = await axios.post('http://45.9.24.232/frames/validity', data);
        return response;
    }

    static async getById(id){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const response = await axios.get('http://45.9.24.232/frames/' + id);
        return response
    }

    static async getStreamById(id){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const response = await axios.get('http://45.9.24.232/streams/' + id);
        return response
    }

    static async getAllStreams(limit= 9, page = 1){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const response = await axios.get('http://45.9.24.232/streams/', {
            params: {
                per_page: limit,
                page: page
            }
        });
        return response
    }
}