import React,{useState,useEffect} from 'react'
import { useHistory } from "react-router-dom";

const CryptoList = (props) => {
    const history = useHistory();

    console.log(props.history)
    let listNodes = props.data.map(function (data) {
        return <div onClick={ev => cryptoDetail(data)} key={data.id}>{data.symbol} - {data.name} - {data.priceUsd}</div>;
    });

    const cryptoDetail = (data) =>{
        history.push("/detail/" + data.id);
    }

    return (
        <div id="crypto-list" className="cryptoList">
        <ul>{listNodes}</ul>
        </div>
    );
}

export default CryptoList