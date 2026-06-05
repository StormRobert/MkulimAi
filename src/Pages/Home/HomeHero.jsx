import { Sprout, CloudSun, Target, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: <CloudSun className="w-8 h-8 text-emerald-600 mb-2" />,
    title: "Weather Alerts",
    desc: "Localized microclimate monitoring & forecasts.",
  },
  {
    icon: <Target className="w-8 h-8 text-emerald-600 mb-2" />,
    title: "Canopy Analysis",
    desc: "Deep-learning based tree detection and health check.",
  },
  {
    icon: <Sprout className="w-8 h-8 text-emerald-600 mb-2" />,
    title: "SMS Actionables",
    desc: "Get instant farm-saving actions sent to your phone.",
  },
];

function HomeHero() {
  return (
    <div className="lg:col-span-7 space-y-8 text-left">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/80 text-emerald-800 text-sm font-semibold rounded-br-lg rounded-bl-lg border border-emerald-200">
        <ShieldCheck className="w-4 h-4" /> AI-Powered Farm Insights
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-950 leading-tight tracking-tight">
        Grow smarter with{" "}
        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Forestry AI
        </span>{" "}
        &amp; Real-Time Weather
      </h1>

      {/* Description */}
      <p className="text-lg text-emerald-900/70 leading-relaxed max-w-xl">
        Optimize your agroforestry practices. Simply upload an aerial photo of
        your land and select your city to get canopy statistics, weather
        hazards, and localized recommendations.
      </p>

      {/* Feature mini-cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        {FEATURES.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-emerald-100/80 hover:border-emerald-200 hover:shadow-sm transition-all duration-300"
          >
            {icon}
            <h3 className="font-semibold text-emerald-950 text-sm">{title}</h3>
            <p className="text-xs text-emerald-800/60 mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeHero;
