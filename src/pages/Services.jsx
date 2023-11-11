import React, {useEffect} from 'react';
import {RTSPPlayer} from "html5_rtsp_player/src/rtsp_player";
import {Link} from "react-router-dom";





const Services = () => {


    /*
    add rtsp potoks (name, rtsp)
    add admins (login, password)
    add services (name)
    */


    return (
        <main className="services">
            <div className="clm">
                <h2>Сервсисы</h2>
                <div>
                    <div>
                        <Link to="/stream_add">
                            <i className="fa-solid fa-video"></i>
                            <span>Добавить стрим</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/admin_add">
                            <i className="fa-solid fa-user-plus"></i>
                            <span>Добавить админа</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/service_add">
                            <i className="fa-solid fa-plus"></i>
                            <span>Добавить сервис</span>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Services;