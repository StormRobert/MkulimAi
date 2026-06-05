function RiskScoreCard({ risk }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Farm Risk Score
      </h2>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500">
            Risk Level
          </p>

          <h3 className="text-3xl font-bold">
            {risk.level}
          </h3>
        </div>

        <div className="text-5xl font-bold">
          {risk.score}%
        </div>
      </div>
    </div>
  );
}

export default RiskScoreCard;