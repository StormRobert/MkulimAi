function WeatherCard({ weather }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Current Weather
      </h2>

      <div className="flex items-center gap-4">
        <img
          src={weather.current.icon}
          alt="weather icon"
          className="w-20 h-20"
        />

        <div>
          <h3 className="text-4xl font-bold">
            {weather.current.temperature}°C
          </h3>

          <p className="text-gray-600">
            Humidity: {weather.current.humidity}%
          </p>

          <p className="text-gray-600">
            Wind Speed: {weather.current.wind_speed} km/h
          </p>

          <p className="text-gray-600">
            UV Index: {weather.current.uv_index}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;