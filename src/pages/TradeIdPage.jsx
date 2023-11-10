import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import ApiService from "../API/ApiService";
import {useFetching} from "../hooks/useFetching";
import Button from "../Components/UI/button/Button";
import Loader from "../Components/UI/Loader/Loader";

const TradeIdPage = () => {
    const params = useParams()
    const [trade, setTrade] = useState({})
    const [fetchingTradeByID, isTradeIdLoading, error] = useFetching(async (id) => {
        const response = await ApiService.getById(id)
        setTrade(response.data)
    })

    const setReport = async (res) => {
        const response = await ApiService.validity(params.id, res)
        alert("Принято")
    }


    useEffect(() => {
        fetchingTradeByID(params.id)
    }, [])

    return (
        <main className="tradeIdPage">
            <div className="clm">
                <h2>Подозрительная торговля {params.id}</h2>
                <div>
                    <img src={trade.frame_url} alt="фото с камеры"/>
                    <div>
                        <a href={"/stream/" + trade.stream_id}>Ссылка на стрим</a>
                        <span>{trade.timestamp}</span>
                    </div>
                </div>
                <div className="btns">
                    <Button onClick={() => setReport(false)}>Неправильно</Button>
                    <Button onClick={() => setReport(true)}>Правильно</Button>
                </div>
            </div>
            {isTradeIdLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div>}
        </main>
    );
};

export default TradeIdPage;