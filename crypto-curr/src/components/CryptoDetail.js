import React, { useState, useEffect } from 'react'
import ChartJS from './Chart'

const DAYS = 7;

function CrypotDetail(props) {

    const id = props.match.params.id;

    const [historyData, setHistoryData] = useState([])

    useEffect(() => {

        getData(id)
        console.log('ne oli lo x1')


    }, [])


    const getData = async (id) => {
        console.log(id);
        const url = `https://api.coincap.io/v2/assets/${id}/history?interval=d1`;
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setHistoryData(data.data.slice(-DAYS))
            })
            .catch(console.log);
    }


    return (
        <div className="Pagination">
            <ChartJS data={historyData}></ChartJS>
        </div>
    );
}

export default CrypotDetail