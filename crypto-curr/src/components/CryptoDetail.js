import React, {useState, useEffect} from 'react'
import Chart from 'chart.js';

const DAYS = 7;

function CrypotDetail(props) {
    const id = props.match.params.id;
    
    const getData = async(id) => {
        console.log(id);
        const url = 'https://api.coincap.io/v2/assets/'+id+'/history?interval=d1';
        fetch(url)
                .then(res => res.json())
                .then((data) => {
                    
                    console.log(data.data.slice(-DAYS));
                })
                .catch(console.log);
    }

    getData(id);

    return (
    <div className="Pagination">
        <canvas id="chartjs-0" class="chartjs" width="770" height="385" style="display: block; width: 770px; height: 385px;"></canvas>
    </div>
    );
}

export default CrypotDetail