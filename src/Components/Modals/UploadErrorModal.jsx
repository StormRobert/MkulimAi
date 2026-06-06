function UploadErrorModal({
  open,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl">

        <h2 className="text-2xl font-bold mb-4">
          Image Required
        </h2>

        <p className="text-gray-700 mb-6">
          Please upload a farm image before running analysis.
        </p>

        <button
          onClick={onClose}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-semibold transition-all"
        >
          Continue
        </button>

      </div>
    </div>
  );
}

export default UploadErrorModal;