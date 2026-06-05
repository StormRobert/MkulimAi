function TreeAnalysisCard({
  analysis,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-6">
        Tree Analysis
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p>Total Trees</p>

          <h3 className="text-3xl font-bold">
            {
              analysis.total_tree_count
            }
          </h3>
        </div>

        <div>
          <p>Canopy Coverage</p>

          <h3 className="text-3xl font-bold">
            {
              analysis.canopy_coverage_pct
            }
            %
          </h3>
        </div>

        <div>
          <p>Healthy Trees</p>

          <h3 className="text-3xl font-bold text-green-600">
            {
              analysis.tree_health
                .healthy
            }
          </h3>
        </div>

        <div>
          <p>Needs Care</p>

          <h3 className="text-3xl font-bold text-yellow-600">
            {
              analysis.tree_health
                .needs_care
            }
          </h3>
        </div>
      </div>
    </div>
  );
}

export default TreeAnalysisCard;