import React from "react";
import "./Details.scss";

function Details({ weather }) {
  return (
    <>
      <div className="details__container">
        <div className="details__container--row">
          <div className="details__numbers">
            {weather.current.uv_index}
            <span className="details__description">UV index</span>
          </div>
          <div className="details__numbers">
            {weather.current.wind_speed} mph
            <span className="details__description">wind</span>
          </div>
          <div className="details__numbers">
            {weather.current.humidity} %
            <span className="details__description">humidity</span>
          </div>
        </div>
        <div className="details__container--row details__container--margin-top">
          <div className="details__numbers">
            {weather.current.visibility} Km
            <span className="details__description">visibility</span>
          </div>
          <div className="details__numbers">
            {weather.current.pressure} MB
            <span className="details__description">pressure</span>
          </div>
          <div className="details__numbers">
            {weather.current.cloudcover} %
            <span className="details__description">cloud cover</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
