import { Image as ImageIcon } from "lucide-react";

function AnalyzeButton({ loading, disabled, onClick }) {
  const isDisabled = loading || disabled;

  const colorClass = loading
    ? "bg-emerald-600/70 text-white cursor-not-allowed"
    : disabled
    ? "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none border border-gray-200/60"
    : "bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-emerald-600/20 active:scale-[0.98]";

  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`relative overflow-hidden w-full flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 ${colorClass}`}
    >
      {loading ? (
        <>
          {/* Spinner */}
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Running Analytics...
        </>
      ) : (
        <>
          <ImageIcon className="w-5 h-5" />
          Analyze Farm Conditions
        </>
      )}
    </button>
  );
}

export default AnalyzeButton;
