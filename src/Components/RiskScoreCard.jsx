import { AlertTriangle, ShieldCheck, AlertCircle } from "lucide-react";

function RiskScoreCard({ risk }) {
  const { level, score } = risk || { level: "Low", score: 0 };

  // Determine styles based on risk level
  let theme = {
    bg: "bg-emerald-50/40",
    border: "border-emerald-100",
    text: "text-emerald-700",
    accent: "bg-emerald-600",
    accentBg: "bg-emerald-100",
    indicatorBg: "bg-emerald-100",
    icon: <ShieldCheck className="w-5 h-5" />,
    description: "Conditions are safe. Your crops face low stress.",
  };

  if (level === "High") {
    theme = {
      bg: "bg-rose-50/40",
      border: "border-rose-100",
      text: "text-rose-700",
      accent: "bg-rose-600",
      accentBg: "bg-rose-100",
      indicatorBg: "bg-rose-100",
      icon: <AlertTriangle className="w-5 h-5" />,
      description: "Caution: Severe weather hazards or canopy issues detected.",
    };
  } else if (level === "Medium") {
    theme = {
      bg: "bg-amber-50/40",
      border: "border-amber-100",
      text: "text-amber-700",
      accent: "bg-amber-600",
      accentBg: "bg-amber-100",
      indicatorBg: "bg-amber-100",
      icon: <AlertCircle className="w-5 h-5" />,
      description: "Moderate threat: Keep check on irrigation and soil drainage.",
    };
  }

  return (
    <div className={`rounded-3xl border p-6 transition-all duration-300 bg-white shadow-xl shadow-emerald-900/5 ${theme.border}`}>
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
        <div>
          <h2 className="text-xl font-bold text-emerald-950">Farm Risk Score</h2>
          <p className="text-xs text-gray-500 font-medium">Environmental stress analysis</p>
        </div>
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${theme.accentBg} ${theme.text}`}>
          {theme.icon}
          {level} Risk
        </span>
      </div>

      {/* Score and Bar */}
      <div className="space-y-6">
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-semibold text-gray-400">Total Hazard Rating</span>
          <div className="flex items-baseline">
            <span className="text-5xl font-extrabold text-emerald-950 tracking-tight">{score}</span>
            <span className="text-lg font-bold text-gray-400 ml-0.5">%</span>
          </div>
        </div>

        {/* Progress Gauge */}
        <div className="space-y-2">
          <div className="w-full bg-gray-100 h-3.5 rounded-full overflow-hidden border border-gray-100">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${theme.accent}`}
              style={{ width: `${score}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 font-medium leading-relaxed">
            {theme.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RiskScoreCard;