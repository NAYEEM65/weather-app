import React from 'react';
import sunny from '../../assets/icons/01d.png';

const CurrentWeather = () => {
    return (
        <div className="w-[300px] rounded shadow-lg text-white bg-gray-800 mt-5 mx-auto mb-0 px-5 pt-0 pb-5">
            <div className="flex justify-between items-center">
                <div className="">
                    <p className="font-bold text-lg m-0">Dhaka</p>
                    <p className="text-sm m-0">Sunny</p>
                </div>

                <img src={sunny} className="w-24" alt="sunny" />
            </div>
            <div className="flex justify-between items-center">
                <p className="tem">30°C</p>
                <div className="tdet">
                    <div className="par">
                        <span className="label">Details</span>
                    </div>
                    <div className="par">
                        <span className="label">Feels Like</span>
                        <span className="label">34°C</span>
                    </div>
                    <div className="par">
                        <span className="label">Wind</span>
                        <span className="label">2 m/s</span>
                    </div>
                    <div className="par">
                        <span className="label">Humidity</span>
                        <span className="label">15%</span>
                    </div>
                    <div className="par">
                        <span className="label">presure</span>
                        <span className="label">15 hp/s</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
