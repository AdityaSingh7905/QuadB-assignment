"use client";
import { useEffect, useState } from "react";

interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
  city: string;
}

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position: GeolocationPosition) => {
          const { latitude, longitude } = position.coords;

          try {
            const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_URL; // Replace with your API key
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();

            if (data.cod !== 200) throw new Error(data.message);

            setWeather({
              temperature: data.main.temp,
              condition: data.weather[0].main,
              icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
              city: data.name,
            });
          } catch (err) {
            setError("Failed to fetch weather data.");
          } finally {
            setLoading(false);
          }
        },
        (error: GeolocationPositionError) => {
          setError("Location access denied.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported.");
      setLoading(false);
    }
  }, []);

  return (
    <div className="p-4 bg-white dark:bg-[#2D3C2E] text-black dark:text-white shadow-md rounded-lg flex items-center space-x-3">
      {loading && <p className="text-gray-500">Fetching weather...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {weather && !error && !loading && (
        <>
          <img
            src={weather.icon}
            alt={weather.condition}
            className="w-20 h-20"
          />
          <div>
            <p className="text-lg font-semibold">{weather.temperature}°C</p>
            <p className="text-sm text-black dark:text-white">
              {weather.condition} in {weather.city}
            </p>
          </div>
        </>
      )}

      {!loading && !error && !weather && (
        <p className="text-gray-500">Weather unavailable</p>
      )}
    </div>
  );
};

export default WeatherWidget;
