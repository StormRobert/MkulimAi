import { Clock, Droplets, Thermometer, Wind } from "lucide-react";

function ForecastCard({ weather }) {
  const hourlyData = weather?.hourly || [];

  // Helper to extract the hour string from ISO-like format, e.g. "2026-06-06T09:00" -> "09:00"
  const formatHour = (timeStr) => {
    if (!timeStr) return "--:--";
    const parts = timeStr.split("T");
    return parts[1] ? parts[1].slice(0, 5) : timeStr;
  };

  return (
    <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/5 p-6 hover:shadow-emerald-900/10 transition-all duration-300 flex flex-col justify-between">
      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
        <div>
          <h2 className="text-xl font-bold text-emerald-950">Hourly Timeline</h2>
          <p className="text-xs text-gray-500 font-medium">Upcoming 8-hour farm conditions</p>
        </div>
        <div className="bg-emerald-100 text-emerald-700 p-2 rounded-xl">
          <Clock className="w-5 h-5" />
        </div>
      </div>

      {/* Hourly Scroll Timeline */}
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-emerald-200 scrollbar-track-gray-50">
        {hourlyData.slice(0, 8).map((hour, index) => {
          const timeLabel = formatHour(hour?.time);
          const temp = hour?.temperature;
          const prob = hour?.precipitation_probability ?? 0;
          const icon = hour?.icon;

          return (
            <div
              key={index}
              className="flex-shrink-0 w-24 bg-gray-50/50 hover:bg-emerald-50/20 border border-gray-100/60 hover:border-emerald-100/50 rounded-2xl p-3 text-center flex flex-col items-center justify-between gap-2 transition-all duration-200"
            >
              {/* Time */}
              <span className="text-xs font-bold text-gray-400">
                {index === 0 ? "Now" : timeLabel}
              </span>

              {/* Weather Icon */}
              {icon ? (
                <img
                  src={icon}
                  alt="weather status"
                  className="w-10 h-10 object-contain my-1"
                />
              ) : (
                <div className="w-10 h-10 bg-emerald-100/50 rounded-full my-1"></div>
              )}

              {/* Temperature */}
              <div className="flex items-baseline justify-center text-emerald-950">
                <span className="text-sm font-extrabold">{temp !== undefined ? Math.round(temp) : "--"}</span>
                <span className="text-[10px] font-bold text-emerald-700">°</span>
              </div>

              {/* Rain Probability */}
              <div className="flex items-center gap-0.5 justify-center text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full border border-blue-100/30">
                <Droplets className="w-2.5 h-2.5 shrink-0" />
                <span>{prob}%</span>
              </div>
            </div>
          );
        })}

        {hourlyData.length === 0 && (
          <div className="text-center text-xs text-gray-400 py-8 w-full">
            No hourly timeline forecast available.
          </div>
        )}
      </div>

      {/* Micro-insight Footer */}
      <div className="mt-2 text-[10px] text-gray-500 font-medium flex items-center gap-1.5 bg-gray-50 p-2.5 rounded-xl border border-gray-100/60">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span>Hourly data provides microclimates for harvesting & spraying windows.</span>
      </div>
    </div>
  );
}

export default ForecastCard;
