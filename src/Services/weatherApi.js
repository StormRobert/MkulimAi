import api from "./api";

export const getWeather = async () => {
  const response = await api.get(
    "/v1/weather?lat=-1.2921&lon=36.8219"
  );

  return response.data;
};