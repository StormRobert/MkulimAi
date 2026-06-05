import { Droplets, Wind, Sun, Thermometer } from "lucide-react";

function WeatherCard({ weather }) {
  const current = weather?.current || {};
  const hourlyFirst = weather?.hourly?.[0] || {};

  const icon = current.icon;
  const temperature = current.temperature;
  const wind_speed = current.wind_speed ?? hourlyFirst.wind_speed;
  const humidity = current.humidity ?? hourlyFirst.humidity;
  const uv_index = current.uv_index ?? hourlyFirst.uv_index;

  return (
    <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/5 p-6 hover:shadow-emerald-900/10 transition-all duration-300">
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-emerald-950">Current Weather</h2>
          <p className="text-xs text-gray-500 font-medium">Real-time agricultural conditions</p>
        </div>
        {icon && (
          <div className="bg-emerald-50 rounded-2xl p-1 border border-emerald-100/50">
            <img
              src={icon}
              alt="Weather Status Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
        )}
      </div>

      <div className="space-y-6">
        {/* Main Temperature Hero */}
        <div className="flex items-baseline gap-2">
          <Thermometer className="w-8 h-8 text-emerald-600 self-center" />
          <span className="text-5xl font-extrabold text-emerald-950 tracking-tight">
            {temperature ?? "--"}
          </span>
          <span className="text-2xl font-bold text-emerald-600">°C</span>
        </div>

        {/* Detailed Grid Stats */}
        <div className="grid grid-cols-3 gap-4 border-t border-gray-50 pt-6">
          {/* Humidity */}
          <div className="bg-emerald-50/50 rounded-2xl p-3 border border-emerald-100/30 text-center space-y-1.5 hover:bg-emerald-50 transition-colors">
            <div className="mx-auto w-7 h-7 rounded-lg bg-blue-100/80 text-blue-600 flex items-center justify-center">
              <Droplets className="w-4 h-4" />
            </div>
            <span className="block text-xs font-semibold text-gray-400">Humidity</span>
            <span className="block text-sm font-bold text-emerald-950">{humidity}%</span>
          </div>

          {/* Wind Speed */}
          <div className="bg-emerald-50/50 rounded-2xl p-3 border border-emerald-100/30 text-center space-y-1.5 hover:bg-emerald-50 transition-colors">
            <div className="mx-auto w-7 h-7 rounded-lg bg-teal-100/80 text-teal-600 flex items-center justify-center">
              <Wind className="w-4 h-4" />
            </div>
            <span className="block text-xs font-semibold text-gray-400">Wind</span>
            <span className="block text-sm font-bold text-emerald-950">{wind_speed} km/h</span>
          </div>

          {/* UV Index */}
          <div className="bg-emerald-50/50 rounded-2xl p-3 border border-emerald-100/30 text-center space-y-1.5 hover:bg-emerald-50 transition-colors">
            <div className="mx-auto w-7 h-7 rounded-lg bg-amber-100/80 text-amber-600 flex items-center justify-center">
              <Sun className="w-4 h-4" />
            </div>
            <span className="block text-xs font-semibold text-gray-400">UV Index</span>
            <span className="block text-sm font-bold text-emerald-950">{uv_index}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;