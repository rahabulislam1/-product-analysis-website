import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className='about'>
                <h4> <strong>PROS</strong> <br />
                    <ul>
                        <li>Better overall performance with all-around upgrades</li>
                        <li>Now support dual 4K monitors, with faster USB ports (USB 3.0)</li>
                        <li>Faster processing speed with CPU and more onboard RAM choices</li>
                        <li>Convenient usage of USB Type-C for power</li>
                    </ul>
                </h4>
                <h4><strong>CONS</strong> <br />
                    <ul>
                        <li>Thermal Issues (Covered in the later section)</li>
                        <li>USB-C port only used for power</li>
                        <li>Limited compatibility with older Raspberry Pi cases</li>
                    </ul>
                </h4>
            </div>
            <div className='specification'>
                <h2>Raspberry Pi 4 SPECIFCATION</h2>
                <ul>
                    <li>CPU 1.5 GHz, Quad-Core Broadcom BCM2711 (Cortex A-72)</li>
                    <li>Selectable 1-4GB DDR4 RAM</li>
                    <li>GPU 500 MHz VideoCore VI</li>
                    <li>USB port 2x USB 3.0 / 2x USB 2.0</li>
                </ul>
            </div>
        </div>

    );
};

export default About;