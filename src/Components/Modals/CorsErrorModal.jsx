function CorsErrorModal({
  open,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">

        {/* Header */}
        <div className="bg-emerald-600 px-6 py-5 text-white">
          <h2 className="text-2xl font-bold">
            Deployment Notice
          </h2>

          <p className="text-emerald-100 mt-1 text-sm">
            Production API restriction detected
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">

          <p className="text-gray-700 leading-relaxed">
            The deployed version of this application is currently blocked by the WeatherAI API CORS policy.
          </p>

          <div className="bg-gray-100 border border-gray-200 rounded-2xl p-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              The application works correctly in local development, but requests from the deployed Vercel domain have not yet been whitelisted by the WeatherAI API provider.
            </p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <p className="text-sm text-yellow-800">
              This is an external API deployment restriction and not a frontend implementation issue.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-all duration-300"
          >
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}

export default CorsErrorModal;