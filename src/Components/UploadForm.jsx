import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { getWeatherByCity } from "../Services/weatherApi";
import { analyzeTrees } from "../Services/forestryApi";
import { calculateRisk } from "../Utils/calculateRisk";
import { generateRecommendations } from "../Utils/generateRecommendations";

import ImageDropZone from "./Inputs/ImageDropZone";
import CitySelect from "./Inputs/CitySelect";
import AnalyzeButton from "./Inputs/AnalyzeButton";
import UploadHint from "./Inputs/UploadHint";
import CorsErrorModal from "./Modals/CorsErrorModal";
import UploadErrorModal from "./Modals/UploadErrorModal";

function UploadForm() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [city, setCity] = useState("Nairobi");
  const [isDragActive, setIsDragActive] = useState(false);
  const [corsError, setCorsError] = useState(false);
  const [uploadError, setUploadError] = useState(false);

  const handleFileChange = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleInputChange = (e) => {
    if (e.target.files?.[0]) handleFileChange(e.target.files[0]);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setIsDragActive(true);
    else if (e.type === "dragleave") setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files?.[0]) handleFileChange(e.dataTransfer.files[0]);
  };

  const clearImage = (e) => {
    e.stopPropagation();
    setImage(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleAnalyze = async () => {
    if (!image) {
      return;
    }

    try {
      setLoading(true);
      setCorsError(false);

      const weather = await getWeatherByCity(city);
      const calculatedRisk = calculateRisk(weather);
      const generatedRecommendations = generateRecommendations(calculatedRisk);

      let treeAnalysisResult = null;
      let treeAnalysisError = null;

      try {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("farmer_id", "F-001");
        formData.append("county", city);
        formData.append("land_acres", "2.5");
        treeAnalysisResult = await analyzeTrees(formData);
      } catch (treeErr) {
        treeAnalysisError =
          treeErr.response?.data?.message ??
          "Tree canopy analysis is currently unavailable on our server.";
      }

      navigate("/analysis", {
        state: {
          weatherData: weather,
          risk: calculatedRisk,
          recommendations: generatedRecommendations,
          analysis: treeAnalysisResult,
          treeError: treeAnalysisError,
          city,
        },
      });
    } catch (error) {
      console.error("GENERAL ERROR:", error);
        if (error.message === "Network Error") {
        setCorsError(true);
        } else {
        alert(
            "Unable to fetch weather details."
        );
        }
    } finally {
      setLoading(false);
    }
  };

  return (
  <>
    <UploadErrorModal
        open={uploadError}
        onClose={() =>
        setUploadError(false)
        }
        />
    <CorsErrorModal
      open={corsError}
      onClose={() =>
      setCorsError(false)
      }
    />

    <div className="space-y-6 text-left">
      <ImageDropZone
        fileInputRef={fileInputRef}
        image={image}
        previewUrl={previewUrl}
        isDragActive={isDragActive}
        onDrag={handleDrag}
        onDrop={handleDrop}
        onInputChange={handleInputChange}
        onClearImage={clearImage}
      />

      <CitySelect
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
        disabled={loading}
      />

      <AnalyzeButton
        loading={loading}
        disabled={!image}
        onClick={handleAnalyze}
      />

      {!image && <UploadHint />}
    </div>
  </>
);
}

export default UploadForm;