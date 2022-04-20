import React from "react";
import './Chart.css'
import ChartBar from "./ChartBar";
const Chart = props => {
    const maxValues = props.dataPoints.map(el => el.value);
    const totalMaxValue = Math.max(...maxValues)

    return (
        <div className="chart">
            { props.dataPoints.map(data =>
                <ChartBar
                    key={ data.label }
                    value={ data.value }
                    maxValue={ totalMaxValue }
                    label={ data.label } />) }
        </div>
    );
}
export default Chart;