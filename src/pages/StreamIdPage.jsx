import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import ApiService from "../API/ApiService";
import videojs from "video.js";
import ReactPlayer from "react-player";

const StreamIdPage = () => {
    const params = useParams()

    const [stream, setStream] = useState({})
    const [fetchingStreamByID, isStreamIdLoading, error] = useFetching(async (id) => {
        const response = await ApiService.getStreamById(id)
        setStream(response.data)
    })


    useEffect(() => {
        fetchingStreamByID(params.id)
    }, [])

    return (
        <main className="streamIdPage">
            <div className="clm">
                <h2>Камера {params.id}</h2>
                <h3>Название камеры: {stream.name}</h3>
                <div className="block_video">
                    <ReactPlayer controls autoPlay url={stream.hls_url}/>
                    <span style={{color: 'red'}}>* Если плеер долго не загружается, попробуйте перезагрузить страницу</span>
                </div>
            </div>
        </main>
    );
};

export default StreamIdPage;