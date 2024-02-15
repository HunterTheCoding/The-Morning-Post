import React, { useState, useEffect } from "react";
import axios from "axios";
import clear from "../../assets/weather/clear.png";
const Weather: React.FC = () => {
  const api_key = "02ade84871c6ffcd20a12970d576f2ab";

  interface WeatherInfo {
    name?: string;
    main?: {
      temp?: number;
    };
  }
 const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({});
  useEffect(() => {
    // Function to fetch weather data based on latitude and longitude
    const fetchWeatherData = async (latitude: number, longitude: number) => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=Metric&appid=${api_key}`
        );
        setWeatherInfo(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    // Fetch weather data based on user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);
  return (
    <div className="w-[120px]  text-white text-center bg-transparent">
      <img src={clear} className="mx-auto h-[50px] w-[50px]" alt="" />
      <h2 className="text-xl">{weatherInfo?.name?.slice(0,20)}</h2>
      <p>{Math.floor(weatherInfo?.main?.temp ?? 0)}° C</p>
    </div>
  );
};
export default Weather;