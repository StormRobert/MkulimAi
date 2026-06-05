import UploadForm from "../Components/UploadForm";
import { Sprout, CloudSun, Target, ShieldCheck } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/50 text-gray-800">
      {/* Header / Navbar */}
      <header className="border-b border-emerald-100 bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-tr from-emerald-600 to-teal-500 p-2.5 rounded-xl shadow-md shadow-emerald-200">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-emerald-950 block">MkulimAi</span>
              <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest block -mt-1">Smart Farm AI</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            System Live (v1.0.0)
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & Info */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/80 text-emerald-800 text-sm font-semibold rounded-full border border-emerald-200">
              <ShieldCheck className="w-4 h-4" /> AI-Powered Farm Insights
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-950 leading-tight tracking-tight">
              Grow smarter with <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Forestry AI</span> & Real-Time Weather
            </h1>
            
            <p className="text-lg text-emerald-900/70 leading-relaxed max-w-xl">
              Optimize your agroforestry practices. Simply upload an aerial photo of your land and select your city to get canopy statistics, weather hazards, and localized recommendations.
            </p>

            {/* Micro Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-emerald-100/80 hover:border-emerald-200 hover:shadow-sm transition-all duration-300">
                <CloudSun className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-semibold text-emerald-950 text-sm">Weather Alerts</h3>
                <p className="text-xs text-emerald-800/60 mt-1">Localized microclimate monitoring & forecasts.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-emerald-100/80 hover:border-emerald-200 hover:shadow-sm transition-all duration-300">
                <Target className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-semibold text-emerald-950 text-sm">Canopy Analysis</h3>
                <p className="text-xs text-emerald-800/60 mt-1">Deep-learning based tree detection and health check.</p>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border border-emerald-100/80 hover:border-emerald-200 hover:shadow-sm transition-all duration-300">
                <Sprout className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-semibold text-emerald-950 text-sm">SMS Actionables</h3>
                <p className="text-xs text-emerald-800/60 mt-1">Get instant farm-saving actions sent to your phone.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Upload Form Container */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-xl shadow-emerald-900/5 hover:shadow-emerald-900/10 transition-all duration-300">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-emerald-950">Analyze Your Farm</h2>
                <p className="text-sm text-emerald-800/60 mt-1">Upload a clear drone or satellite image of your field.</p>
              </div>
              
              <UploadForm />
            </div>
          </div>
        </div>
      </main>

      {/* Elegant Footer */}
      <footer className="border-t border-emerald-100 mt-20 py-8 bg-emerald-950 text-emerald-200/60 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sprout className="w-5 h-5 text-emerald-400" />
            <span className="font-semibold text-emerald-100">MkulimAi © 2026</span>
          </div>
          <p className="text-xs text-emerald-200/40">Made by Storm Arasa.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;