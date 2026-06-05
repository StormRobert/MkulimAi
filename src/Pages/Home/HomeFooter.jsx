import { Sprout } from "lucide-react";

function HomeFooter() {
  return (
    <footer className="border-t border-emerald-100 mt-20 py-8 bg-emerald-950 text-emerald-200/60 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sprout className="w-5 h-5 text-emerald-400" />
          <span className="font-semibold text-emerald-100">MkulimAi © 2026</span>
        </div>
        <p className="text-xs text-emerald-200/40">Made by Storm Arasa.</p>
      </div>
    </footer>
  );
}

export default HomeFooter;
