import { CheckCircle2, Sparkles } from "lucide-react";

function RecommendationCard({ recommendations }) {
  const list = recommendations || [];

  return (
    <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/5 p-8 hover:shadow-emerald-900/10 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="bg-emerald-100 text-emerald-700 p-2 rounded-xl">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-emerald-950">Agroforestry Recommendations</h2>
            <p className="text-xs text-gray-500 font-medium">AI generated agricultural suggestions</p>
          </div>
        </div>
      </div>

      {/* List items */}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {list.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3.5 bg-emerald-50/20 hover:bg-emerald-50/50 border border-emerald-100/30 hover:border-emerald-100/80 rounded-2xl p-4 transition-all duration-200 group"
          >
            <div className="bg-emerald-100/60 text-emerald-700 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
            </div>
            <div className="space-y-0.5">
              <span className="block text-xs font-bold text-emerald-800 uppercase tracking-wider">Action Item #{index + 1}</span>
              <p className="text-sm font-semibold text-emerald-950 leading-relaxed">
                {item}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationCard;