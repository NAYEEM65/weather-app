import { useState } from 'react';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Forecast from './components/Forecast/Forecast';
import Header from './components/Header';
import Search from './components/Search/Search';

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState(null);
    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(' ');
        const currentWeatherFetch = fetch(
            `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
        );
        const foreCastWeatherfetch = fetch(
            `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
        );
        Promise.all([currentWeatherFetch, foreCastWeatherfetch])
            .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();
                setCurrentWeather({ city: searchData.label, ...weatherResponse });
                setForecastWeather({ city: searchData.label, ...forecastResponse });
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <Header />
            <div className="md:max-w-[1080px] my-6 mx-auto">
                <Search onSearchChange={handleOnSearchChange} />
                {currentWeather && <CurrentWeather data={currentWeather} />}

                {forecastWeather && <Forecast data={forecastWeather} />}
            </div>
        </>
    );
}

export default App;
