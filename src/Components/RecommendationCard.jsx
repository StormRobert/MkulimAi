function RecommendationCard({ recommendations }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Recommendations
      </h2>

      <ul className="space-y-3">
        {recommendations.map((item, index) => (
          <li
            key={index}
            className="bg-gray-100 p-3 rounded-xl"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationCard;