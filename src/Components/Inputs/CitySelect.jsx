import { MapPin } from "lucide-react";

const CITIES = ["Nairobi", "Machakos", "Meru", "Kisumu", "Eldoret"];

function CitySelect({ value, onChange, disabled }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        Select Farm Region
      </label>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-600">
          <MapPin className="w-4 h-4" />
        </div>

        <select
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors disabled:opacity-60"
        >
          {CITIES.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CitySelect;
