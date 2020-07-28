import React, { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [weather, setWeather] = useState();
  const baseEndpoint = "http://api.weatherstack.com/current";

  async function fetchWeather(query) {
    const accessKey = "2efb97218011e382b9523f8267818ed5";
    const res = await fetch(
      `${baseEndpoint}?access_key=${accessKey}&query=${query}`
    );
    const data = await res.json();
    setWeather(data);
  }

  useEffect(() => {
    fetchWeather("london");
  }, []);

  return <div>{weather && <Card weather={weather} />}</div>;
}

export default App;
