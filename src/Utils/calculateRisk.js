export const calculateRisk = (weather) => {
  const rain =
    weather.daily[1].precipitation_sum;

  const humidity =
    weather.current.humidity;

  if (rain > 4 || humidity > 80) {
    return {
      level: "High",
      score: 85,
    };
  }

  if (rain > 2 || humidity > 65) {
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