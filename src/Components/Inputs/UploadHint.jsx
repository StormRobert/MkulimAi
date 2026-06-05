import { AlertCircle } from "lucide-react";

function UploadHint() {
  return (
    <div className="flex items-start gap-2 text-xs text-gray-500 bg-gray-50/70 p-3 rounded-xl border border-gray-100">
      <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
      <span>
        Upload an aerial or close-up photo of your crops to unlock Canopy and
        Health diagnostics alongside Weather risk alerts.
      </span>
    </div>
  );
}

export default UploadHint;
