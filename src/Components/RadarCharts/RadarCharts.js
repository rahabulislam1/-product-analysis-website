import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';

const RadarCharts = (props) => {
    return (
        <div>
            <RadarChart outerRadius={90} width={730} height={250} data={props.products}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Investment" dataKey="investment" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Revenue" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>

        </div>
    );
};

export default RadarCharts;