import { useEffect } from "react";
import { getWeather } from "./Services/weatherApi";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeather();
        console.log("Weather Data:", data);
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Mkulima AI
      </h1>
    </div>
  );
}

export default App;