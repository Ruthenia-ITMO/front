import React, {useEffect, useRef, useState} from 'react';
import TradeService from "../API/TradeService";
import {getPageCount} from "../utils/pages";
import {useFetching} from "../hooks/useFetching";
import {useObserver} from "../hooks/useObserver";
import Loader from "../Components/UI/Loader/Loader";
import {Link} from "react-router-dom";

const Main = () => {
    let date = new Date()
    const [hour, setHour] = useState(date.getHours())
    const [minutes, setMinutes] = useState(date.getMinutes())
    const [seconds, setSeconds] = useState(":")

    const [trades, setTrades] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()
    let time = "";
    if (hour >= 4 && hour < 12){
        time = "Доброе утро!"
    } else if(hour >= 12 && hour < 18){
        time = "Хорошего дня!"
    }else if(hour >= 18 && hour < 23) {
        time = "Хорошего вечера!"
    } else {
        time = "Доброй ночи!"
    }




    const [fetchPosts, isTradesLoading, tradeError] = useFetching(async (limit, page) => {
        const response = await TradeService.getAll(limit, page)
        setTrades([...trades, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isTradesLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page]);

    setTimeout(() => {
        if (hour !== date.getHours()) {
                setHour(date.getHours())
        }
        if (minutes !== date.getMinutes()){
                setMinutes(date.getMinutes())
        }
        if (seconds === ":"){
            setSeconds(" ")
        } else {
            setSeconds(":")
        }
    }, 500)



    return (
        <main className="reports">
            <div>
                <div className="clm">
                    <div>
                        <h2>{time}</h2>
                        <span><i className="fa-solid fa-clock"></i><span id="hour">{hour.toString().length < 2 && "0"}{hour}</span><span id="temp">{seconds}</span><span id="min">{minutes.toString().length < 2 && "0"}{minutes}</span></span>
                    </div>
                    <a href="#trading">Что нового?</a>
                    <img src="./assets/img/men.png" alt="men" />
                </div>
                <div className="clm">
                    <div className="list-info">
                        <ul>
                            <li><span><span>10</span><span>камер</span></span></li>
                            <li><span><span>{totalPages*10}</span><span>нарушители</span></span></li>
                            <li><span><span>5</span><span>торговлей</span></span></li>
                            <li><span><span>1</span><span>админов</span></span></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="trading" className="clm">
                <div className="report_header">
                    <h2>Несогласованная торговля</h2>
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
                <div className="trades">
                    {trades.map((trade, index) =>
                        <div key={trade.id}>
                            <img src={trade.url} alt=""/>
                            <div>
                                <Link to={"/trade/" + trade.id}>{trade.title}</Link>
                                <span>{trade.id}</span>
                            </div>
                        </div>
                    )}
                    <div ref={lastElement} style={{height: 20, background: 'white'}}/>
                    {isTradesLoading &&
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader /></div>}
                </div>
            </div>
        </main>
    );
};

export default Main;