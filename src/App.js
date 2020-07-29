import React, { useState } from "react";
import Card from "./Card";
import Input from "./Input";
import UnitToggle from "./UnitToggle";
import Loader from "./Loader";
import "./App.scss";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [weather, setWeather] = useState();
  const [unit, setUnit] = useState("m");
  const baseEndpoint = "http://api.weatherstack.com/current";
  const [loading, setLoading] = useState(false);

  async function fetchWeather(query) {
    const accessKey = "2efb97218011e382b9523f8267818ed5";
    const res = await fetch(
      `${baseEndpoint}?access_key=${accessKey}&query=${query}&units=${unit}`
    );
    const data = await res.json();
    setWeather(data);
    setTimeout(() => setLoading(false), 500);
  }

  const search = () => {
    setLoading(true);
    fetchWeather(`${inputValue}`);
    setInputValue("");
  };

  const switchUnits = (e) => {
    setUnit(e.target.value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const convertTemp = (e) => {
    if (e.target.value === unit) return;

    if (e.target.value === "m") {
      const m = Math.round(((weather.current.temperature - 32) * 5) / 9);
      setWeather({
        ...weather,
        current: { ...weather.current, temperature: m },
      });
    } else {
      const f = Math.round((weather.current.temperature * 9) / 5 + 32);
      setWeather({
        ...weather,
        current: { ...weather.current, temperature: f },
      });
    }
  };

  return (
    <div className="App">
      <UnitToggle
        handleClick={weather && convertTemp}
        handleChange={switchUnits}
        weather={weather}
      />
      <Input
        value={inputValue}
        handleChange={handleChange}
        handleClick={search}
      />
      {loading ? <Loader /> : <Card weather={weather} />}
    </div>
  );
}

export default App;
