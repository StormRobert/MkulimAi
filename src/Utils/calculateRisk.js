export const calculateRisk = (weather) => {
  if (!weather) {
    return { level: "Low", score: 0 };
  }

  // Get max precipitation probability from the next 12 hours
  const hourlyData = weather.hourly || [];
  const maxPrecipProb = hourlyData.slice(0, 12).reduce((max, hour) => {
    const prob = hour.precipitation_probability ?? 0;
    return Math.max(max, prob);
  }, 0);

  // Fallback humidity from first hourly hour if current doesn't have it
  const currentHourly = hourlyData[0] || {};
  const humidity = weather.current?.humidity ?? currentHourly.humidity ?? 50;

  // High Risk: rain probability > 60% or humidity > 80%
  if (maxPrecipProb > 60 || humidity > 80) {
    return {
      level: "High",
      score: 85,
    };
  }

  // Medium Risk: rain probability > 30% or humidity > 65%
  if (maxPrecipProb > 30 || humidity > 65) {
    return {
      level: "Medium",
      score: 55,
    };
  }

  return {
    level: "Low",
    score: 20,
  };
};