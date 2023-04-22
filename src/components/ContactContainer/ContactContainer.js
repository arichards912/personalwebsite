import React, { useState, useEffect } from "react";
import ContactPane from "./ContactPane";
import "./ContactContainer.css";

function ContactContainer({ onProgressChange = () => {} }) {
  const [activePanel, setActivePanel] = useState(0);

  const panels = [
    {
      type: "text",
      title: "What's your",
      keyword: "name",
      placeholder: "Jane Doe",
      regex: "^.{1,50}$",
    },
    {
      type: "email",
      title: "What's your",
      keyword: "email",
      placeholder: "janeDoe@snailmail.com",
      regex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
    },
    {
      type: "text",
      title: "What's your",
      keyword: "message",
      placeholder: "message",
      regex: "^.{1,200}$",
    },
    {
      type: "submit",
      title: "",
      keyword: "Submit",
    },
  ];

  const handleNext = () => {
    setActivePanel((prevActivePanel) => prevActivePanel + 1);
  };

  const handlePrev = () => {
    setActivePanel((prevActivePanel) => prevActivePanel - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted");
    // Handle form submission logic here
  };



  useEffect(() => {
    const updateProgress = () => {
      const percentage = (activePanel / (panels.length - 1)) * 100;
      onProgressChange(percentage);
    };

    updateProgress();
  }, [activePanel, onProgressChange, panels.length]);

  return (
    <div className="contact-container">
      {panels.map((panel, index) => (
        <div className="panel" key={index} style={{ display: activePanel === index ? "block" : "none" }}>
          <ContactPane
            index={index}
            {...panel}
            onNext={handleNext}
            onPrev={handlePrev}
            onSubmit={handleSubmit}
          />
        </div>
      ))}
    </div>
  );
}

export default ContactContainer;
