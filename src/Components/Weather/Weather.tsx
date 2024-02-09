import React, { useState, useEffect } from 'react';
import clear from '../../assets/weather/clear.png';

const Weather: React.FC = () => {
    const api_key = '02ade84871c6ffcd20a12970d576f2ab';

    interface WeatherInfo {
        name?: string;
        main?: {
            temp?: number;
        };
    }

    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({});

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=Metric&appid=${api_key}`)
            .then(res => res.json())
            .then(data => setWeatherInfo(data));
    }, []);

    return (
        <div className='w-[100px] h-[100px] text-white text-center bg-transparent'>
            <img src={clear} className='mx-auto h-[50px] w-[50px]' alt="" />
            <h2 className='text-xl'>{weatherInfo?.name}</h2>
            <p>{Math.floor(weatherInfo?.main?.temp ?? 0)}° C</p>
        </div>
    );
};

export default Weather;
