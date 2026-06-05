import { useState } from "react";

import { getWeatherByCity } from "../Services/weatherApi";
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
  const [city, setCity] = useState("Nairobi");
  const [weatherData, setWeatherData] = useState(null);
  const [risk, setRisk] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [analysis, setAnalysis] = useState(null);
  const [treeError, setTreeError] = useState(null);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAnalyze = async () => {

  if (!image) {
    alert(
      "Please upload an image first."
    );

    return;
  }

  try {

    setLoading(true);
    setTreeError(null);

    console.log(
      "FETCHING WEATHER..."
    );

    const weather =
      await getWeatherByCity(city);

    console.log(
      "WEATHER RESPONSE:",
      weather
    );

    setWeatherData(weather);

    const calculatedRisk =
      calculateRisk(weather);

    setRisk(calculatedRisk);

    const generatedRecommendations =
      generateRecommendations(
        calculatedRisk
      );

    setRecommendations(
      generatedRecommendations
    );

    try {

      console.log(
        "ANALYZING TREES..."
      );

      const formData =
        new FormData();

      formData.append(
        "image",
        image
      );

      formData.append(
        "farmer_id",
        "F-001"
      );

      formData.append(
        "county",
        city
      );

      formData.append(
        "land_acres",
        "2.5"
      );

      const treeAnalysis =
        await analyzeTrees(formData);

      console.log(
        "TREE ANALYSIS:",
        treeAnalysis
      );

      setAnalysis(treeAnalysis);

    } catch (treeError) {

      console.error(
        "TREE ANALYSIS FAILED:",
        treeError
        );

        if (
        treeError.response?.data?.message
        ) {
        setTreeError(
            treeError.response.data.message
        );
        } else {
        setTreeError(
            "Tree analysis failed."
        );
        }

    }

  } catch (error) {

    console.error(
      "GENERAL ERROR:",
      error
    );

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

      <select
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
        className="mb-4 w-full border rounded-xl p-3"
      >
        <option>Nairobi</option>
        <option>Machakos</option>
        <option>Meru</option>
        <option>Kisumu</option>
        <option>Eldoret</option>
      </select>

      <button
        onClick={handleAnalyze}
        className="bg-black text-white px-6 py-3 rounded-xl"
      >
        {
          loading
            ? "Analyzing..."
            : "Analyze Farm"
        }
      </button>

      {treeError && (
        <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-2xl mt-6">
            <h3 className="font-bold mb-2">
            Tree Analysis Unavailable
            </h3>

            <p>{treeError}</p>

            <p className="text-sm mt-2">
            Weather analysis is still available.
            </p>
        </div>
    )}

      {analysis && (
        <TreeAnalysisCard
          analysis={analysis}
        />
      )}

      {weatherData && (
        <WeatherCard
          weather={weatherData}
        />
      )}

      {risk && (
        <RiskScoreCard
          risk={risk}
        />
      )}

      {recommendations.length > 0 && (
        <RecommendationCard
          recommendations={
            recommendations
          }
        />
      )}

      {risk && (
        <SmsPreview
          risk={risk}
        />
      )}

    </div>
  );
}

export default UploadForm;