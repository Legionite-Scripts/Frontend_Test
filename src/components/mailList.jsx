import React, { useState } from "react";
import Mail from "./mail";
function MailList() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionTwo, setSelectedOptionTwo] = useState("");
  const texts = [
    "mistalogikk@gmail.com",
    "+234 (810) 234 5678",
    "israelajala@gmail.com",
    "+234 (810) 234 5678",
    "mistalogikk@gmail.com",  
  ];

  const channelOptions = [
    { value: "", label: "Channel" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const assignedOptions = [
    { value: "", label: "Assigned to" },
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChangeTwo = (event) => {
    setSelectedOptionTwo(event.target.value);
  };

  return (
    <main className="mailList p-2">
      <input type="search" placeholder="Search" className="p-1 mb-2" />
      <div className="flexed-row mb-2">
        <select value={selectedOption} onChange={handleChange} className="p-1">
          {channelOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          value={selectedOptionTwo}
          onChange={handleChangeTwo}
          className="p-1"
        >
          {assignedOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mails">
      {texts.map((text, index) => (
        <Mail key={index} text={text} />
      ))}
      </div>
    </main>
  );
}

export default MailList;
