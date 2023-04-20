import React, { useState } from "react";
import "./ContactPane.css";

function ContactPane({ index, type, title, placeholder, regex = "", onNext, onPrev, onSubmit }) {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setIsValid(validateInput(e.target.value));
  };

  const validateInput = (value) => {
    if (type === "submit") {
      return true;
    }

    const pattern = new RegExp(regex);
    return pattern.test(value);
  };

  const handleClickNext = () => {
    if (type === "submit") {
      onSubmit();
    } else {
      onNext();
    }
  };

  return (
    <div>
      <div className="panel-grid">
      <h1 className="panel-title">{title}</h1>
        {type !== "submit" && (
          <input
            className="contact-input"
            type={type}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
          />
        )}
        <button className="progress-button back-button" disabled={index === 0} onClick={onPrev}>
            Back
        </button>
        <button className="progress-button forward-button" disabled={!isValid && type !== "submit"} onClick={handleClickNext}>
                {type === "submit" ? "Submit" : "Next"}
            </button> 
      </div>
    </div>
  );
}

export default ContactPane;
