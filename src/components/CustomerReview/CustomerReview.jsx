import React from 'react'
import Chart from 'react-apexcharts'
import './CustomerReview.css'

const CustomerReview = () => {
    const data = {

        series: [
            {
                name: "Review",
                data: [10, 50, 30, 90, 40, 120, 100],
            },
        ],
        options: {
            chart: {
                type: "area",
                height: "auto",
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
                colors: ["#ff929f"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: false,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2022-08-22T00:00:00.000Z",
                    "2022-08-22T01:30:00.000Z",
                    "2022-08-22T02:30:00.000Z",
                    "2022-08-22T03:30:00.000Z",
                    "2022-08-22T04:30:00.000Z",
                    "2022-08-22T05:30:00.000Z",
                    "2022-08-22T06:30:00.000Z",
            ],
            },
            yaxis: {
                show: false
            },
            toolbar:{
                show: false
            }
        }
    };

    return (
        <div className="CustomerReview">
            <Chart series={ data.series } options={ data.options } type='area'/>
        </div>
    )
}

export default CustomerReview