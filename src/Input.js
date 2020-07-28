import React from "react";
import { ReactComponent as Search } from "./icons/search.svg";
import { ReactComponent as Arrow } from "./icons/arrow.svg";
import "./Input.scss";

function Input({ handleChange, handleClick, value }) {
  return (
    <div className="input">
      <Search />
      <p className="input__text">the weather in</p>
      <input
        className="input__search"
        type="text"
        name=""
        id=""
        aria-label="Search a city"
        onChange={handleChange}
        value={value}
        autoFocus
      />
      <button onClick={handleClick} className="input__btn">
        <Arrow />
      </button>
    </div>
  );
}

export default Input;
