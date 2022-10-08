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
                <p className="font-bold text-5xl w-auto my-10 mx-0">30°C</p>
                <div className="w-full pl-5">
                    <div className="flex justify-between items-center">
                        <span className="text-left font-normal text-[12px] border-b border-white">
                            Details
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-left font-normal text-[12px]">Feels Like</span>
                        <span className="text-right font-semibold text-[12px]">34°C</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-left font-normal text-[12px]">Wind</span>
                        <span className="text-right font-semibold text-[12px]">2 m/s</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-left font-normal text-[12px]">Humidity</span>
                        <span className="text-right font-semibold text-[12px]">15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-left font-normal text-[12px]">presure</span>
                        <span className="text-right font-semibold text-[12px]">15 hp/s</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
