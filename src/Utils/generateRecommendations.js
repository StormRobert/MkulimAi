export const generateRecommendations = (risk) => {
  if (risk.level === "High") {
    return [
      "Delay pesticide spraying",
      "Protect vulnerable seedlings",
      "Inspect drainage systems",
      "Monitor fungal disease risk",
    ];
  }

  if (risk.level === "Medium") {
    return [
      "Monitor rainfall closely",
      "Prepare irrigation adjustments",
    ];
  }

  return [
    "Weather conditions are stable",
    "Continue normal farm operations",
  ];
};