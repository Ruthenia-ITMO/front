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

    static async validity(id, valid){
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