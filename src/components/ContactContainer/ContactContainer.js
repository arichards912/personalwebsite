import React, { useState, useEffect } from "react";
import ContactPane from "./ContactPane";
import "./ContactContainer.css";

import { v4 as uuidv4 } from "uuid";
import AWS from "aws-sdk";

AWS.config.update({
  region: process.env.REACT_APP_AWS_REGION,
  credentials: new AWS.Credentials(
    process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    process.env.REACT_APP_AWS_SECRET_ACCESS_KEY
  ),
});


const saveToDynamoDB = async (data) => {
  console.log("Data:", data);
  const docClient = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: process.env.REACT_APP_DYNAMODB_TABLE_NAME,
    Item: {
      emailid: uuidv4(),
      name: data.name,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString(),
    },
  };

  console.log("params:", params);

  try {
    await docClient.put(params).promise();
    console.log("Data saved to DynamoDB.");
  } catch (error) {
    console.error("Error saving data to DynamoDB:", error);
  }
};


function ContactContainer({ onProgressChange = () => {} }) {
  const [activePanel, setActivePanel] = useState(0);
  const [inputValues, setInputValues] = useState({});

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

  const handleInputChange = (keyword, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [keyword]: value,
    }));
  };
  

  const handleSubmit = () => {
    console.log("Form submitted");
    saveToDynamoDB(inputValues);
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
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        </div>
      ))}
    </div>
  );
}

export default ContactContainer;
