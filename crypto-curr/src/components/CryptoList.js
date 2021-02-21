import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

const CryptoList = (props) => {
    const history = useHistory();

    console.log(props.history)
    let listNodes = props.data.map(function (data) {
        return (
            <div onClick={ev => cryptoDetail(data)} className="card mb-3" key={data.id}>
                <div class="card-body">
                   <strong>{data.symbol}</strong>  - {data.name} - {data.priceUsd}
                </div>
            </div>
        )
    });

    const cryptoDetail = (data) => {
        history.push("/detail/" + data.id);
    }

    return (
        <div id="crypto-list" className="row">
            <div class="col-12">
            {listNodes}
            </div>
        </div>
    );
}

export default CryptoList