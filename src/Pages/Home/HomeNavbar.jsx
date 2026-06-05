import { Sprout } from "lucide-react";

function HomeNavbar() {
  return (
    <header className="border-b border-emerald-100 bg-white/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-tr from-emerald-600 to-teal-500 p-2.5 rounded-xl shadow-md shadow-emerald-200">
            <Sprout className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-emerald-950 block">
              MkulimAi
            </span>
            <span className="text-xs font-semibold text-teal-600 uppercase tracking-widest block -mt-1">
              Smart Farm AI
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeNavbar;
