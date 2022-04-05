import React, { useEffect, useState } from 'react';
import BarCharts from '../BarCharts/BarCharts';
import LineCharts from '../LineCharts/LineCharts';
import PieCharts from '../PieCharts/PieCharts';
import RadarCharts from '../RadarCharts/RadarCharts';
import './Dashboard.css';

const Dashboard = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div>
            <div className='dashboard'>
                <LineCharts products={products}></LineCharts>
                <PieCharts products={products}></PieCharts>
                <BarCharts products={products}></BarCharts>
                <RadarCharts products={products}></RadarCharts>
            </div>
        </div>
    );
};

export default Dashboard;