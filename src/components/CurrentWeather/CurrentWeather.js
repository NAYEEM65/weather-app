import React from 'react';

const CurrentWeather = ({ data }) => {
    return (
        <div className="w-[300px] rounded shadow-lg text-white bg-gray-800 mt-5 mx-auto mb-0 px-5 pt-0 pb-5">
            <div className="flex justify-between items-center">
                <div className="">
                    <p className="font-bold text-lg m-0">{data.city}</p>
                    <p className="text-sm m-0">{data.weather[0].description}</p>
                </div>

                <img src={`/icons/${data.weather[0].icon}.png`} className="w-24" alt="sunny" />
            </div>
            <div className="flex justify-between items-center">
                <p className="font-bold text-5xl w-auto my-10 mx-0">
                    {Math.round(data.main.temp)}°C
                </p>
                <div className="w-full pl-5">
                    <div className="flex justify-between items-center">
                        <span className="text-left font-normal text-[12px] border-b border-white">
                            Details
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-left font-normal text-[12px]">Feels Like</span>
                        <span className="text-right font-semibold text-[12px]">
                            {Math.round(data.main.feels_like)}°C
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-left font-normal text-[12px]">Wind</span>
                        <span className="text-right font-semibold text-[12px]">
                            {data.wind.speed} m/s
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-left font-normal text-[12px]">Humidity</span>
                        <span className="text-right font-semibold text-[12px]">
                            {data.main.humidity}%
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-left font-normal text-[12px]">presure</span>
                        <span className="text-right font-semibold text-[12px]">
                            {' '}
                            {data.main.pressure} hp/s
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;
