import React, {useEffect, useRef, useState} from 'react';
import Input from "../Components/UI/Input/Input";
import {useCameras} from "../hooks/useCameras";
import {useFetching} from "../hooks/useFetching";
import ApiService from "../API/ApiService";
import {getPageCount} from "../utils/pages";
import {useObserver} from "../hooks/useObserver";
import Loader from "../Components/UI/Loader/Loader";
import {Link} from "react-router-dom";

const Cameras = () => {
    const [streams, setStreams] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()



    const [query, setQuery] = useState('')
    const searchCameras = useCameras(streams, query)


    const [fetchStreams, isStreamsLoading, streamError] = useFetching(async (limit, page) => {
        const response = await ApiService.getAllStreams(limit, page)
        setStreams([...streams, ...response.data.items])
        const totalCount = response.data.count
        setTotalPages(getPageCount(totalCount, limit))
    });

    useObserver(lastElement, page < totalPages, isStreamsLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchStreams(limit, page)
    }, [page]);

    return (
        <main className="cameras">
            <div className="clm">
                <h2>Активные камеры</h2>
                <Input value={query} onChange={e => setQuery(e.target.value)} placeholder="Поиск" />
                <table className='table'>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Ссылка на стрим</th>
                    </tr>
                    </thead>
                    <tbody>
                {searchCameras.map((camera, index) =>
                    <tr key={camera.id}>
                        <td>{camera.id}</td>
                        <td><a href={"/stream/" + camera.id}>{camera.name}</a></td>
                    </tr>
                )}
                    <tr ref={lastElement} style={{height: 20, background: 'white'}} />
                    </tbody>

                </table>
                {(!searchCameras.length && !isStreamsLoading) && <h3 className='empty'>Камер по этому адресу не найдено</h3>}
                {isStreamsLoading &&
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div>}
            </div>
        </main>
    );
};

export default Cameras;