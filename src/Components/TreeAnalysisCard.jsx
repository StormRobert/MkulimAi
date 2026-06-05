import { TreePine, Trees, Percent, CheckCircle2, AlertTriangle, Info } from "lucide-react";

function TreeAnalysisCard({ analysis }) {
  const { total_tree_count, canopy_coverage_pct, tree_health, low_confidence } = analysis || {};
  const hasDetection = total_tree_count > 0;

  return (
    <div className="bg-white rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/5 p-8 hover:shadow-emerald-900/10 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-100 pb-5 mb-6">
        <div>
          <h2 className="text-xl font-bold text-emerald-950">Tree Canopy Analytics</h2>
          <p className="text-xs text-gray-500 font-medium">Computer vision satellite/aerial diagnostic</p>
        </div>
        <div className="bg-emerald-100/50 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200">
          AI Model Active
        </div>
      </div>

      {/* Low Confidence Warning */}
      {low_confidence && (
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl mb-6 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-amber-900">Low Confidence Detection</h4>
            <p className="text-xs text-amber-800/80 mt-1 leading-relaxed">
              Our AI could not confidently segment all canopies in this image. For best results, use high-resolution drone or close-up satellite imagery.
            </p>
          </div>
        </div>
      )}

      {/* Canopy Progress Bar */}
      {hasDetection && canopy_coverage_pct !== undefined && (
        <div className="mb-8 bg-emerald-50/30 p-5 rounded-2xl border border-emerald-100/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-emerald-950 flex items-center gap-2">
              <Percent className="w-4 h-4 text-emerald-600" /> Canopy Coverage
            </span>
            <span className="text-lg font-extrabold text-emerald-700">{canopy_coverage_pct}%</span>
          </div>
          <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden border border-gray-50">
            <div
              className="h-full rounded-full bg-emerald-600 transition-all duration-1000"
              style={{ width: `${canopy_coverage_pct}%` }}
            ></div>
          </div>
          <p className="text-xs text-emerald-800/50 mt-2 font-medium">
            Percentage of total land shaded or occupied by tree crowns.
          </p>
        </div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Total Tree Count */}
        <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-4 text-center space-y-2 hover:bg-gray-50 transition-colors">
          <div className="mx-auto w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <Trees className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Total Trees</span>
            <span className="block text-2xl font-extrabold text-emerald-950 mt-1">{total_tree_count}</span>
          </div>
        </div>

        {/* Canopy Coverage stat box */}
        <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-4 text-center space-y-2 hover:bg-gray-50 transition-colors">
          <div className="mx-auto w-9 h-9 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
            <TreePine className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Density</span>
            <span className="block text-2xl font-extrabold text-emerald-950 mt-1">
              {canopy_coverage_pct ? `${canopy_coverage_pct}%` : "N/A"}
            </span>
          </div>
        </div>

        {/* Healthy Trees */}
        <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-4 text-center space-y-2 hover:bg-gray-50 transition-colors">
          <div className="mx-auto w-9 h-9 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Healthy</span>
            <span className="block text-2xl font-extrabold text-green-600 mt-1">
              {tree_health?.healthy ?? 0}
            </span>
          </div>
        </div>

        {/* Needs Care */}
        <div className="bg-gray-50/50 border border-gray-100 rounded-2xl p-4 text-center space-y-2 hover:bg-gray-50 transition-colors">
          <div className="mx-auto w-9 h-9 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Needs Care</span>
            <span className="block text-2xl font-extrabold text-amber-600 mt-1">
              {tree_health?.needs_care ?? 0}
            </span>
          </div>
        </div>
      </div>

      {!hasDetection && (
        <div className="mt-8 border border-dashed border-gray-200 rounded-2xl p-4 text-center flex items-center justify-center gap-2 text-xs text-gray-400">
          <Info className="w-4 h-4" />
          No trees were confidently identified in this image.
        </div>
      )}
    </div>
  );
}

export default TreeAnalysisCard;