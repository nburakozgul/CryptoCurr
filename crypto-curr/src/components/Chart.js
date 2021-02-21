import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';

const ChartJS = (props) => {


    const { data } = props;
    const chartRef = useRef()


    useEffect(() => {
        let ctx = chartRef.current;

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels:  getTimes(data),
                datasets: [{
                    label: 'Crypto Values',
                    data:  getValues(data),
                    type: 'line',
					pointRadius: 3,
                    backgroundColor:  "#ff6384",
                    borderColor:  "#ff6384",
					fill: false,
					borderWidth: 2,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }, [data])


    const getValues = (data) => {
        let values = [];
        data.map((value, index) => {
            if (value.priceUsd) {
                values.push(value.priceUsd)
                return;
            }
        })
        return values;
    }

    const getTimes = () => {
        let times = [];
        data.map((value, index) => {
            if (value.date) {
                times.push(value.date)
                return;
            }
        })
        return times;
    }

    return (
        <div className="test">
            <canvas ref={chartRef}>

            </canvas>
        </div>
    )
}

export default ChartJS;