import api from "./api";

export const getWeatherByCity =
  async (city) => {

    const response = await api.get(
      `/v1/weather-geo?city=${city}&units=metric`
    );

    return response.data;
};