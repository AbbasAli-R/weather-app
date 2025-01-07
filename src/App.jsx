import { useEffect, useState } from "react";

function App() {
  const [search, setSearch] = useState("delhi");
  const [city, setCity] = useState(null);

  const getWeatherData = async () => {
    const API_KEY = import.meta.env.VITE_WEATHER_API;
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`
    );
    let result = await response.json();
    setCity(result);
  };

  useEffect(() => {
    getWeatherData();
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-800 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">Weather App</h1>
        </div>
        <div className="flex justify-center">
          <input
            type="search"
            placeholder="Enter city name"
            spellCheck="false"
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 text-lg text-gray-900 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />
        </div>
        {city && (
          <div className="text-center space-y-4">
            <img
              className="w-24 mx-auto"
              src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png"
              alt="Weather Icon"
            />
            <h1 className="text-4xl font-semibold text-gray-800">
              {city.main?.temp}°C
            </h1>
            <h2 className="text-xl text-gray-500">{city.name}</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center space-x-4">
                <img
                  className="w-10 h-10"
                  src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png"
                  alt="Humidity"
                />
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {city.main?.humidity}%
                  </p>
                  <p className="text-sm text-gray-500">Humidity</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <img
                  className="w-10 h-10"
                  src="https://cdn-icons-png.flaticon.com/512/136/136712.png"
                  alt="Wind Speed"
                />
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {city.wind?.speed} km/h
                  </p>
                  <p className="text-sm text-gray-500">Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
