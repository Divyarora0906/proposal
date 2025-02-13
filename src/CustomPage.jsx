import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import confetti from "canvas-confetti";
import "./Custom.css";
import BG from "./BG";

const CustomPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const day = params.get("day");
  const name = params.get("name");
  const sender = params.get("sender"); // Get sender's name
  const note = params.get("note") || "Wishing you a wonderful day! 💖"; // Get note

  const [isOpen, setIsOpen] = useState(false);

  const messages = {
    "Rose Day": [`Dear ${name}, you make life beautiful like a rose! 🌹`],
    "Propose Day": [`${name}, will you be mine forever? 💍`],
    "Chocolate Day": [`${name}, you're sweeter than all chocolates! 🍫`],
    "Valentine's Day": [`Happy Valentine's Day, ${name}! ❤️`],
  };

  const randomMessage =
    day && messages[day]
      ? messages[day][Math.floor(Math.random() * messages[day].length)]
      : "Happy Special Day! 🎉";

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      setIsOpen(true);

      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      }, 500);
    }
  };

  return (
    <>
      <BG />
      <div className="custom-container">
        {/* Envelope Animation */}
        <div
          className={`wrapper ${isOpen ? "open" : ""}`}
          onClick={handleOpenEnvelope}
        >
          <div className="lid one"></div>
          <div className="lid two"></div>
          <div className="envelope"></div>
          <div className="letter">
          <h2 className="letter-title">Happy {day}! </h2>
            <p className="message">{randomMessage}</p>

            {/* Note Section */}
            <p className="note-title"><strong></strong></p>
            <p className="note-text">{note}</p>

            {/* Sender's Name */}
            <p className="sender-name">With love, <br /> <strong>{sender} ❤️</strong></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPage;
