import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Sprout, RefreshCw, AlertCircle } from "lucide-react";
import WeatherCard from "../Components/WeatherCard";
import RiskScoreCard from "../Components/RiskScoreCard";
import RecommendationCard from "../Components/RecommendationCard";
import SmsPreview from "../Components/SmsPreview";
import TreeAnalysisCard from "../Components/TreeAnalysisCard";
import ForecastCard from "../Components/ForecastCard";

function Analysis() {
  const location = useLocation();
  const { weatherData, risk, recommendations, analysis, treeError, city } = location.state || {};

  // If no weather data or state was passed (e.g. direct url visit), redirect to Home
  if (!weatherData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-6 text-gray-800">
        <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl max-w-md w-full text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center border border-red-100">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-emerald-950">No Active Analysis</h2>
            <p className="text-sm text-emerald-900/60 leading-relaxed">
              It looks like you haven't uploaded a farm photo or selected a region yet. Please start a new analysis first.
            </p>
          </div>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg shadow-emerald-600/10 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" /> Start New Analysis
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/50 text-gray-800 pb-12">
      {/* Header */}
      <header className="border-b border-emerald-100 bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2 hover:bg-emerald-50 rounded-xl border border-transparent hover:border-emerald-100 transition-all">
              <ArrowLeft className="w-5 h-5 text-emerald-700" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="bg-emerald-600 p-2 rounded-lg text-white">
                <Sprout className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-emerald-950 block">MkulimAi</span>
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest block -mt-1">Farm Insights Dashboard</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 px-4 py-2 rounded-xl border border-emerald-100 transition-all duration-200"
            >
              <RefreshCw className="w-4 h-4" /> New Analysis
            </Link>
          </div>
        </div>
      </header>

      {/* Dashboard Main Container */}
      <main className="max-w-7xl mx-auto px-6 mt-8 space-y-8 text-left">
        {/* Title and Top overview */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">
              Analysis Results for
            </div>
            <h1 className="text-3xl font-extrabold text-emerald-950 mt-0 mb-0">
              {city} Region Farm
            </h1>
          </div>
          <div className="text-sm text-emerald-800/60 font-medium">
            Analyzed successfully • 2.5 Acres
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Risk Score & SMS (Spans 4/12 cols) */}
          <div className="lg:col-span-4 space-y-8">
            <RiskScoreCard risk={risk} />
            <SmsPreview risk={risk} />
          </div>

          {/* Right Column: Weather & Tree Canopy (Spans 8/12 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Tree Analysis (Important for agroforestry) */}
            {treeError ? (
              <div className="bg-red-50 border border-red-200 p-6 rounded-3xl">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 p-2.5 rounded-2xl border border-red-200">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-950">
                      Tree Canopy Analysis Unavailable
                    </h3>
                    <p className="text-sm text-red-800/80 mt-1 leading-relaxed">
                      {treeError}
                    </p>
                    <p className="text-xs text-red-800/60 mt-3 font-semibold bg-red-100/50 px-2 py-1 rounded inline-block">
                      Weather and risk assessments are still active below.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              analysis && <TreeAnalysisCard analysis={analysis} />
            )}

            {/* Weather Information & Forecast */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <WeatherCard weather={weatherData} />
              <ForecastCard weather={weatherData} />
            </div>

            {/* Recommendations */}
            {recommendations && recommendations.length > 0 && (
              <RecommendationCard recommendations={recommendations} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Analysis;
