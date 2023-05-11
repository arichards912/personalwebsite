import React, { useState } from "react";
import "./ContactPane.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";

function ContactPane({ index, type, title, keyword, placeholder, regex = "", onNext, onPrev, onInputChange, onSubmit, submitStatus}) {
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
          {title} <span className="keyword-text">{keyword}{type !== "status" ? "?" : ""}</span>
        </h1>

        {type !== "submit" && type !== "status" && (
          <input
            className="contact-input"
            type={type}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && isValid) {
                handleClickNext();
              }
            }}
          />
        )}
      </div>
      {/* Render the back button only if we're not on the first panel and haven't submitted yet */}
        {index !== 0 && (
          <button className={`progress-button back-button ${!submitStatus.submitted ? 'fade-in' : 'fade-out'}`} onClick={onPrev}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
        )}
        {/* Render the forward button only if we're not on the submit panel, haven't submitted yet, and input is valid */}
        {type !== "submit" && type !== "status" && (
          <button className={`progress-button forward-button ${isValid && !submitStatus.submitted ? 'fade-in' : 'fade-out'}`} onClick={handleClickNext}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        )}
        {/* Render the submit button only if we're on the submit panel and haven't submitted yet */}
        {type === "submit" && (
          <button className={`progress-button forward-button ${!submitStatus.submitted ? 'fade-in' : 'fade-out'}`} onClick={handleClickNext}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        )}
    </div>
  );
}

export default ContactPane;
