import { Smartphone, HelpCircle } from "lucide-react";

function SmsPreview({ risk }) {
  const { level } = risk || { level: "Low" };
  
  const message =
    level === "High"
      ? "⚠️ MkulimAi alert: Heavy rainfall expected in your county. Protect vulnerable seedlings, delay spraying activities, and inspect drainage lines."
      : level === "Medium"
      ? "🌦 MkulimAi alert: Moderate rainfall expected. Monitor farm conditions closely and adjust irrigation schedules accordingly."
      : " MkulimAi alert: Stable weather conditions ahead. Normal farm activities can continue. Happy farming!";

  const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/5 p-6 hover:shadow-emerald-900/10 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
        <div>
          <h2 className="text-xl font-bold text-emerald-950">SMS Broadcast Preview</h2>
          <p className="text-xs text-gray-500 font-medium">Farmer communication simulator</p>
        </div>
        <div className="bg-blue-50 text-blue-600 p-2 rounded-xl">
          <Smartphone className="w-5 h-5" />
        </div>
      </div>

      {/* Smartphone mockup layout */}
      <div className="bg-gray-950 p-3.5 rounded-3xl shadow-inner border border-gray-800 max-w-sm mx-auto">
        {/* Screen inside */}
        <div className="bg-gray-900 rounded-2xl p-4 min-h-48 flex flex-col justify-between text-[13px] relative overflow-hidden">
          {/* Phone Header */}
          <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[10px]">
                MA
              </div>
              <div>
                <span className="block font-bold text-gray-200 text-xs">MkulimAi Broadcast</span>
                <span className="block text-[9px] text-gray-500">Shortcode: 22340</span>
              </div>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
          </div>

          {/* Chat Bubble Area */}
          <div className="flex-1 flex flex-col justify-end space-y-2">
            <div className="text-[9px] text-gray-600 font-bold self-center mb-1 bg-gray-950/40 px-2 py-0.5 rounded-full">
              TODAY {timeString}
            </div>

            {/* Bubble */}
            <div className="self-start bg-emerald-600 text-white p-3 rounded-2xl rounded-tl-none max-w-[85%] relative shadow-md">
              <p className="leading-relaxed font-semibold text-gray-100">
                {message}
              </p>
              {/* Tail */}
              <div className="absolute top-0 -left-1.5 w-2 h-2.5 bg-emerald-600 clip-path-triangle"></div>
            </div>
            <span className="text-[9px] text-gray-500 self-start ml-2 font-medium">Delivered</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-start gap-2 text-[11px] text-gray-500 bg-gray-50 p-3 rounded-xl border border-gray-100">
        <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <span>This preview represents the warning SMS broadcast sent out to farmers in this region via their local agricultural cooperatives.</span>
      </div>
    </div>
  );
}

export default SmsPreview;