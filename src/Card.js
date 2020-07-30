import React from "react";
import colorDescription from "./color-description";
import "./Card.scss";
import "./Details.scss";
import Details from "./Details";

function Card({ weather }) {
  return (
    <>
      {weather && (
        <div className="card">
          <h2 className="card__title">
            {weather.location.name}, {weather.location.country}
          </h2>
          <img
            className="card__img"
            src={require(`../images/${weather.current.weather_code}.svg`)}
            alt="weather"
          />
          <div className="card__descriptions">
            <div className="card__container">
              <p className="card__text">
                {weather.current.weather_descriptions}
              </p>
              <p className="card__text card__text--lighter">
                {colorDescription[`${weather.current.weather_code}`]}
              </p>
            </div>
            <span className="card__text card__text--bigger">
              {weather.current.temperature}°
            </span>
          </div>
          <input
            className="details__input"
            type="checkbox"
            name="toggle"
            id="toggle"
          />
          <label className="details__label" htmlFor="toggle">
            details
          </label>
          <Details weather={weather} />
        </div>
      )}
    </>
  );
}

export default Card;
