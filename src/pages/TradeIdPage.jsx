import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import TradeService from "../API/TradeService";
import {useFetching} from "../hooks/useFetching";

const TradeIdPage = () => {
    const params = useParams()
    const [trade, setTrade] = useState({})
    const [fetchingTradeByID, isLoading, error] = useFetching(async (id) => {
        const response = await TradeService.getById(id)
        setTrade(response.data)
    })
    useEffect(() => {
        fetchingTradeByID(params.id)
    }, [])

    return (
        <main className="tradeIdPage">
            <div className="clm">
                <h2>Подозрительная торговля {params.id}</h2>
                <div>
                    <img src={trade.url} alt=""/>
                    <div>
                        <span>{trade.title}</span>
                        <span>{trade.id}</span>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default TradeIdPage;