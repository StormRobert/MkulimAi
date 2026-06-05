import { useState } from "react";
import { getWeather } from "../Services/weatherApi";
import { analyzeTrees } from "../Services/forestryApi";
import WeatherCard from "./WeatherCard";
import RiskScoreCard from "./RiskScoreCard";
import RecommendationCard from "./RecommendationCard";
import SmsPreview from "./SmsPreview";
import TreeAnalysisCard from "./TreeAnalysisCard";

import { calculateRisk } from "../Utils/calculateRisk";
import { generateRecommendations } from "../Utils/generateRecommendations";

function UploadForm() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [risk, setRisk] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [analysis, setAnalysis] = useState(null);
  const [city, setCity] = useState("Nairobi");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAnalyze = async () => {
  if (!image) {
    alert("Please upload an image first.");
    return;
  }

  try {
    setLoading(true);

    console.log("Uploaded Image:", image);
    const formData = new FormData();

    formData.append("image", image);

    formData.append(
      "farmerId",
      "F-001"
    );

    formData.append(
      "county",
      "Nairobi"
    );

    formData.append(
      "landAcres",
      "2.5"
    );

    formData.append(
      "notes",
      "Tea plantation"
    );

    const treeAnalysis =
      await analyzeTrees(formData);

    console.log(
      "Tree Analysis:",
      treeAnalysis
    );

    setAnalysis(treeAnalysis);

    const weather = await getWeather();

    setWeatherData(weather);

    const calculatedRisk = calculateRisk(weather);

    setRisk(calculatedRisk);

    const generatedRecommendations = generateRecommendations(calculatedRisk);

    setRecommendations(generatedRecommendations);

  } catch (error) {
    console.error(error);

  } finally {
    setLoading(false);
  }
};

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4 block w-full"
      />

      <button
        onClick={handleAnalyze}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        {loading ? "Analyzing..." : "Analyze Farm"}
      </button>
      {weatherData && (
        <WeatherCard weather={weatherData} />
        )}
        {risk && (
        <RiskScoreCard risk={risk} />
        )}

        {recommendations.length > 0 && (
        <RecommendationCard
            recommendations={recommendations}
        />
        )}
        {risk && (
        <SmsPreview risk={risk} />
        )}
        {analysis && (
            <TreeAnalysisCard analysis={analysis} />
        )}
    </div>
  );
}

export default UploadForm;