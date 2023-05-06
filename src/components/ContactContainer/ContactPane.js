import React, { useState } from "react";
import "./ContactPane.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

function ContactPane({ index, type, title, keyword, placeholder, regex = "", onNext, onPrev, onInputChange, onSubmit}) {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setIsValid(validateInput(e.target.value));
    onInputChange(keyword, e.target.value);
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
    <div className="content-internal">
      <div className="input-content">
        <h1 className="panel-title">
          {title} <span className="keyword-text">{keyword}?</span>
        </h1>

        {type !== "submit" && (
          <input
            className="contact-input"
            type={type}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
          />
        )}
      </div>
      <button className="progress-button back-button" disabled={index === 0} onClick={onPrev}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button
        className="progress-button forward-button"
        disabled={!isValid && type !== "submit"}
        onClick={handleClickNext}
      >
        {type === "submit" ? (
          <FontAwesomeIcon icon={faCheck} />
        ) : (
          <FontAwesomeIcon icon={faArrowRight} />
        )}
      </button>
    </div>
  );
}

export default ContactPane;
