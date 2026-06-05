function SmsPreview({ risk }) {
  const message =
    risk.level === "High"
      ? "⚠️ Heavy rainfall expected. Protect seedlings and delay spraying activities."
      : risk.level === "Medium"
      ? "🌦 Moderate rainfall expected. Monitor farm conditions closely."
      : "✅ Weather conditions stable. Continue normal farming operations.";

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">
        SMS Alert Preview
      </h2>

      <div className="bg-green-100 border border-green-300 rounded-xl p-4">
        <p className="text-gray-800">
          {message}
        </p>
      </div>
    </div>
  );
}

export default SmsPreview;