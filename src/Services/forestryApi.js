import api from "./api";

export const analyzeTrees = async (
  formData
) => {
  const response = await api.post(
    "/v1/trees/analyze",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return response.data;
};