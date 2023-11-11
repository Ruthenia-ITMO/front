import axios from "axios";
import {useState} from "react";
import Cookies from "js-cookie";
import {API, API_SERVER} from "../context";
export default class ApiService {
    static getApiName(){
        return "http://45.9.24.232";
    }

    static async getAll(limit= 9, page = 1){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const response = await axios.get(API_SERVER + '/frames/', {
            params: {
                per_page: limit,
                page: page
            }
        });
        return response
    }

    static async auth(login, password){
        const data = { name: login, password: password };
        const response = await axios.post(API_SERVER + '/users/login', data);
        return response;
    }

    static async admin_add(login, password){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const data = { name: login, password: password, is_admin: true };
        const response = await axios.post(API_SERVER + '/users/add', data);
        return response;
    }

    static async stream_add(name, rtsp){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const data = { name: name, rtsp_url: rtsp };
        const response = await axios.post(API_SERVER +'/streams/add', data);
        return response;
    }

    static async service_add(name){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const data = { name: name};
        const response = await axios.post(API_SERVER + '/services/add', data);
        return response;
    }

    static async validity(id, valid){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const data = { frame_id : id, is_valid: valid };
        const response = await axios.post(API_SERVER + '/frames/validity', data);
        return response;
    }

    static async getById(id){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const response = await axios.get(API_SERVER + '/frames/' + id);
        return response
    }

    static async getStreamById(id){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const response = await axios.get(API_SERVER + '/streams/' + id);
        return response
    }

    static async getAllStreams(limit= 9, page = 1){
        axios.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get("access_token");
        const response = await axios.get(API_SERVER + '/streams/', {
            params: {
                per_page: limit,
                page: page
            }
        });
        return response
    }
}