import { Upload, X } from "lucide-react";

function ImageDropZone({
  fileInputRef,
  image,
  previewUrl,
  isDragActive,
  onDrag,
  onDrop,
  onInputChange,
  onClearImage,
}) {
  return (
    <div
      onDragEnter={onDrag}
      onDragOver={onDrag}
      onDragLeave={onDrag}
      onDrop={onDrop}
      onClick={() => fileInputRef.current?.click()}
      className={`relative group cursor-pointer border-2 border-dashed rounded-2xl p-6 text-center transition-all duration-300 ${
        isDragActive
          ? "border-emerald-500 bg-emerald-50/50 scale-[0.99]"
          : previewUrl
          ? "border-emerald-100 bg-emerald-50/10 hover:border-emerald-300"
          : "border-gray-200 bg-gray-50/50 hover:border-emerald-400 hover:bg-emerald-50/10"
      }`}
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onInputChange}
        className="hidden"
      />

      {previewUrl ? (
        <div className="relative space-y-4">
          <div className="mx-auto w-full max-h-48 overflow-hidden rounded-xl border border-emerald-100 relative shadow-inner">
            <img
              src={previewUrl}
              alt="Farm Preview"
              className="w-full h-full object-cover max-h-48"
            />
            <button
              type="button"
              onClick={onClearImage}
              className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 text-white p-1.5 rounded-full transition-colors backdrop-blur-sm z-10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="text-sm font-semibold text-emerald-950 truncate px-2">
            {image?.name}
          </div>
          <div className="text-xs text-emerald-800/40">
            {image ? (image.size / (1024 * 1024)).toFixed(2) : "0.00"} MB • Click to replace image
          </div>
        </div>
      ) : (
        <div className="py-6 space-y-3">
          <div className="mx-auto w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
            <Upload className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-gray-700">
              <span className="text-emerald-600 font-bold group-hover:underline">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-gray-500">Supports PNG, JPG or JPEG up to 10MB</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageDropZone;
