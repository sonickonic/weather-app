import React, { useState } from "react";
import Card from "./Card";
import Input from "./Input";

function App() {
  const [inputValue, setInputValue] = useState("");
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

  const search = () => {
    fetchWeather(`${inputValue}`);

    setInputValue("");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <Input
        value={inputValue}
        handleChange={handleChange}
        handleClick={search}
      />
      {weather && <Card weather={weather} />}
    </div>
  );
}

export default App;
