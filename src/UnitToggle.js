import React from "react";
import "./UnitToggle.scss";

function UnitToggle({ handleChange, handleClick }) {
  return (
    <div className="unit-toggle" onChange={handleChange}>
      <div>
        <input
          type="radio"
          id="C"
          className="unit-toggle__input unit-toggle__input--checked"
          name="unit"
          value="m"
          defaultChecked={true}
          onClick={handleClick}
        />
        <label className="unit-toggle__label" htmlFor="C">
          C°
        </label>
      </div>
      <span className="unit-toggle__element">/</span>
      <div>
        <input
          type="radio"
          id="F"
          className="unit-toggle__input"
          name="unit"
          value="f"
          defaultChecked={false}
          onClick={handleClick}
        />
        <label className="unit-toggle__label" htmlFor="F">
          F°
        </label>
      </div>
    </div>
  );
}

export default UnitToggle;
