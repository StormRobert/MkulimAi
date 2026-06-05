import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, MapPin, Image as ImageIcon, X, AlertCircle } from "lucide-react";

import { getWeatherByCity } from "../Services/weatherApi";
import { analyzeTrees } from "../Services/forestryApi";

import { calculateRisk } from "../Utils/calculateRisk";
import { generateRecommendations } from "../Utils/generateRecommendations";

function UploadForm() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [city, setCity] = useState("Nairobi");
  const [isDragActive, setIsDragActive] = useState(false);

  const handleFileChange = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const clearImage = (e) => {
    e.stopPropagation();
    setImage(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAnalyze = async () => {
    if (!image) {
      alert("Please upload a farm image first.");
      return;
    }

    try {
      setLoading(true);

      console.log("FETCHING WEATHER...");
      const weather = await getWeatherByCity(city);
      console.log("WEATHER RESPONSE:", weather);

      const calculatedRisk = calculateRisk(weather);
      const generatedRecommendations = generateRecommendations(calculatedRisk);

      let treeAnalysisResult = null;
      let treeAnalysisError = null;

      try {
        console.log("ANALYZING TREES...");
        const formData = new FormData();
        formData.append("image", image);
        formData.append("farmer_id", "F-001");
        formData.append("county", city);
        formData.append("land_acres", "2.5");

        treeAnalysisResult = await analyzeTrees(formData);
        console.log("TREE ANALYSIS:", treeAnalysisResult);
      } catch (treeError) {
        console.error("TREE ANALYSIS FAILED:", treeError);
        if (treeError.response?.data?.message) {
          treeAnalysisError = treeError.response.data.message;
        } else {
          treeAnalysisError = "Tree canopy analysis is currently unavailable on our server.";
        }
      }

      // Navigate to /analysis and pass all data in state
      navigate("/analysis", {
        state: {
          weatherData: weather,
          risk: calculatedRisk,
          recommendations: generatedRecommendations,
          analysis: treeAnalysisResult,
          treeError: treeAnalysisError,
          city: city,
        },
      });

    } catch (error) {
      console.error("GENERAL ERROR:", error);
      alert("Unable to fetch weather details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 text-left">
      {/* Upload Zone */}
      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`relative group cursor-pointer border-2 border-dashed rounded-2xl p-6 text-center transition-all duration-300 ${
          isDragActive
            ? "border-emerald-500 bg-emerald-50/50 scale-[0.99]"
            : previewUrl
            ? "border-emerald-100 bg-emerald-50/10 hover:border-emerald-300"
            : "border-gray-200 bg-gray-50/50 hover:border-emerald-400 hover:bg-emerald-50/10"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleInputChange}
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
                onClick={clearImage}
                className="absolute top-2 right-2 bg-black/70 hover:bg-black/90 text-white p-1.5 rounded-full transition-colors backdrop-blur-sm z-10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="text-sm font-semibold text-emerald-950 truncate px-2">
              {image.name}
            </div>
            <div className="text-xs text-emerald-800/40">
              {(image.size / (1024 * 1024)).toFixed(2)} MB • Click to replace image
            </div>
          </div>
        ) : (
          <div className="py-6 space-y-3">
            <div className="mx-auto w-12 h-12 rounded-xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Upload className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-700">
                <span className="text-emerald-600 font-bold group-hover:underline">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">Supports PNG, JPG or JPEG up to 10MB</p>
            </div>
          </div>
        )}
      </div>

      {/* City Dropdown */}
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Select Farm Region</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-600">
            <MapPin className="w-4 h-4" />
          </div>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={loading}
            className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-colors disabled:opacity-60"
          >
            <option>Nairobi</option>
            <option>Machakos</option>
            <option>Meru</option>
            <option>Kisumu</option>
            <option>Eldoret</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleAnalyze}
        disabled={loading || !image}
        className={`relative overflow-hidden w-full flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 ${
          loading
            ? "bg-emerald-600/70 text-white cursor-not-allowed"
            : !image
            ? "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none border border-gray-200/60"
            : "bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-emerald-600/20 active:scale-[0.98]"
        }`}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white animate-infinite"
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

      {/* Helpful Hint */}
      {!image && (
        <div className="flex items-start gap-2 text-xs text-gray-500 bg-gray-50/70 p-3 rounded-xl border border-gray-100">
          <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>Upload an aerial or close-up photo of your crops to unlock Canopy and Health diagnostics alongside Weather risk alerts.</span>
        </div>
      )}
    </div>
  );
}

export default UploadForm;