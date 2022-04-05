import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LineCharts = (props) => {
    return (
        <div>
            <h3><strong>Month Wise Sell</strong></h3>
            <LineChart width={300} height={300} data={props.products}>
                <Line type="monotone" dataKey="sell" stroke='#8884d8'></Line>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default LineCharts;