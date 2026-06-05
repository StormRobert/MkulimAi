function TreeAnalysisCard({ analysis }) {
  const hasDetection =
    analysis.total_tree_count > 0;

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">
        Tree Analysis
      </h2>

      {analysis.low_confidence && (
        <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-xl mb-6">
          <p className="font-semibold text-yellow-800">
            Low Confidence Detection
          </p>

          <p className="text-sm text-yellow-700 mt-2">
            The AI could not confidently
            identify tree canopies from
            this image. Try uploading a
            clearer aerial or drone image.
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-gray-500">
            Total Trees
          </p>

          <h3 className="text-3xl font-bold">
            {analysis.total_tree_count}
          </h3>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-gray-500">
            Canopy Coverage
          </p>

          <h3 className="text-3xl font-bold">
            {analysis.canopy_coverage_pct
              ? `${analysis.canopy_coverage_pct}%`
              : "N/A"}
          </h3>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-gray-500">
            Healthy Trees
          </p>

          <h3 className="text-3xl font-bold text-green-600">
            {analysis.tree_health?.healthy ?? 0}
          </h3>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <p className="text-gray-500">
            Needs Care
          </p>

          <h3 className="text-3xl font-bold text-yellow-600">
            {analysis.tree_health?.needs_care ?? 0}
          </h3>
        </div>
      </div>

      {!hasDetection && (
        <div className="mt-6 text-sm text-gray-500">
          No trees were confidently
          detected in this image.
        </div>
      )}
    </div>
  );
}

export default TreeAnalysisCard;