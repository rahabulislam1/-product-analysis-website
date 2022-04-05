import React from 'react';
import { Pie, PieChart } from 'recharts';

const PieCharts = (props) => {
    return (
        <div>
            <h3>Investment vs Revenue</h3>
            <PieChart width={600} height={250}>
                <Pie data={props.products} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8"></Pie>
                <Pie data={props.products} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d"></Pie>
            </PieChart>
        </div>
    );
};

export default PieCharts;