import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek),
    );
    return (
        <>
            <label className="font-bold text-2xl ml-2 text-gray-700">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="bg-gray-200 rounded-xl h-10 m-1 flex items-center cursor-pointer text-sm px-5 py-1">
                                    <img
                                        src={`icons/${item.weather[0].icon}.png`}
                                        className="w-10"
                                        alt="weather"
                                    />
                                    <label className="cursor-default text-gray-800 flex-1 font-semibold ml-4">
                                        {forecastDays[idx]}
                                    </label>
                                    <label className="cursor-default flex-1 mr-4 text-right">
                                        {item.weather[0].description}
                                    </label>
                                    <label className="text-gray-500">
                                        {Math.round(item.main.temp_max)}°C /
                                        {Math.round(item.main.temp_min)}°C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div
                                style={{
                                    gridRowGap: 0,
                                    gridColumnGap: '15px',
                                    columnGap: '45px',
                                    display: 'grid',
                                    flex: '1 1',
                                    gridTemplateColumns: 'auto auto',
                                    padding: '5px 15px',
                                    rowGap: 0,
                                }}
                            >
                                <div className="flex justify-between items-center h-8">
                                    <label className="text-gray-500 text-xs md:text-sm">
                                        Pressure:
                                    </label>
                                    <label className="text-gray-800 text-xs md:text-sm">
                                        {item.main.pressure}
                                    </label>
                                </div>
                                <div className="flex justify-between items-center h-8">
                                    <label className="text-gray-500 text-xs md:text-sm">
                                        Humidity:
                                    </label>
                                    <label className="text-gray-800 text-xs md:text-sm">
                                        {item.main.humidity}
                                    </label>
                                </div>
                                <div className="flex justify-between items-center h-8">
                                    <label className="text-gray-500 text-xs md:text-sm">
                                        Clouds:
                                    </label>
                                    <label className="text-gray-800 text-xs md:text-sm">
                                        {item.clouds.all}%
                                    </label>
                                </div>
                                <div className="flex justify-between items-center h-8">
                                    <label className="text-gray-500 text-xs md:text-sm">
                                        Wind speed:
                                    </label>
                                    <label className="text-gray-800 text-xs md:text-sm">
                                        {item.wind.speed} m/s
                                    </label>
                                </div>
                                <div className="flex justify-between items-center h-8">
                                    <label className="text-gray-500 text-xs md:text-sm">
                                        Sea level:
                                    </label>
                                    <label className="text-gray-800 text-xs md:text-sm">
                                        {item.main.sea_level}m
                                    </label>
                                </div>
                                <div className="flex justify-between items-center h-8">
                                    <label className="text-gray-500 text-xs md:text-sm">
                                        Feels like:
                                    </label>
                                    <label className="text-gray-800 text-xs md:text-sm">
                                        {item.main.feels_like}°C
                                    </label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forecast;
