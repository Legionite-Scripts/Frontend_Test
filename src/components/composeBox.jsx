import { useState } from "react";
import "../assets/CSS/components.css";
import dropdownIcon from "../assets/Images/dropdown-icon.png";
import addIcon from "../assets/Images/add-circle.png";
import messagesIcon from "../assets/Images/composebox-icons/message-icon.png";
import newMessages from "../assets/Images/composebox-icons/new-messages.png";
import userTick from "../assets/Images/composebox-icons/user-tick.png";
import closedIcon from "../assets/Images/composebox-icons/tick-circle.png";
import starIcon from "../assets/Images/composebox-icons/star.png";
import infoIcon from "../assets/Images/composebox-icons/info-circle.png";
import addBlockIcon from "../assets/Images/composebox-icons/add.png";

function ComposeBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <main className="composeBox p-2 text-center">
      <button className="p-1 flexed-row center text-center mb-5">
        <img src={addIcon} alt="Add icon" />
        &nbsp; Compose
      </button>

      <div className="dropdown">
        <button
          onClick={toggleDropdown}
          className="dropdown-toggle pt-1 pb-1 flexed-row center"
        >
          <img src={dropdownIcon} alt="Dropdown Icon" />
          &nbsp; Primary
        </button>
        {isOpen && (
          <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
            <button className="dropdown-item flexed-row center p-1 mb-1">
              <div className="flexed-row center">
                <img src={messagesIcon} alt="All" />
                <p>All</p>
              </div>
              345
            </button>
            {/*  */}
            <button className="dropdown-item flexed-row center p-1 mb-1">
              <div className="flexed-row center">
                <img src={newMessages} alt="All" />
                <p>New</p>
              </div>
              3
            </button>
            {/*  */}
            <button className="dropdown-item flexed-row center p-1 mb-1">
              <div className="flexed-row center">
                <img src={userTick} alt="All" />
                <p>Assigned to me</p>
              </div>
            </button>
            {/*  */}
            <button className="dropdown-item flexed-row center p-1 mb-1">
              <div className="flexed-row center">
                <img src={closedIcon} alt="All" />
                <p>Closed</p>
              </div>
            </button>
            {/*  */}

            <button className="dropdown-item flexed-row center p-1 mb-1">
              <div className="flexed-row center">
                <img src={starIcon} alt="All" />
                <p>Starred</p>
              </div>
            </button>
            {/*  */}
            <button className="dropdown-item flexed-row center p-1 mb-1">
              <div className="flexed-row center">
                <img src={infoIcon} alt="All" />
                <p>Spam</p>
              </div>
              1
            </button>
            {/*  */}
            <button className="dropdown-item flexed-row center p-1 mb-1">
              <div className="flexed-row center">
                <img src={addBlockIcon} alt="All" />
                <p>Add Block</p>
              </div>
            </button>
          </div>
        )}
      </div>
      {/*  */}
      {/*  */}

      <div className="dropdown">
        <button
          onClick={toggleDropdown2}
          className="dropdown-toggle pt-1 pb-1 flexed-row center"
        >
          <img src={dropdownIcon} alt="Dropdown Icon" />
          &nbsp; Channels
        </button>
      </div>
      {/*  */}
      <div className="dropdown">
        <button
          onClick={toggleDropdown2}
          className="dropdown-toggle pt-1 pb-1 flexed-row center"
        >
          <img src={dropdownIcon} alt="Dropdown Icon" />
          &nbsp; Direct Message
        </button>
      </div>
      {/*  */}
      <div className="dropdown">
        <button
          onClick={toggleDropdown2}
          className="dropdown-toggle pt-1 pb-1 flexed-row center"
        >
          <img src={dropdownIcon} alt="Dropdown Icon" />
          &nbsp; Group Message
        </button>
      </div>
      {/*  */}
      <div className="dropdown">
        <button
          onClick={toggleDropdown2}
          className="dropdown-toggle pt-1 pb-1 flexed-row center"
        >
          <img src={dropdownIcon} alt="Dropdown Icon" />
          &nbsp; Labels
        </button>
      </div>
      {/*  */}
    </main>
  );
}

export default ComposeBox;
