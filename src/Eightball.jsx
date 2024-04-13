import React, { useState } from "react";
import "./Eightball.css";

const Eightball = ({ answers }) => {
  const [reply, setReply] = useState("Think of a question.");
  const [color, setColor] = useState("black");
  const [textColor, setTextColor] = useState("white");

  const getResponse = () => {
    const randomIdx = Math.floor(Math.random() * answers.length);
    const randomAnswer = answers[randomIdx];
    const { msg, color } = randomAnswer;
    setColor(color);
    setReply(msg);
    setTextColor("black");
  };

  return (
    <>
      <div
        className="Eightball"
        style={{ backgroundColor: color, color: textColor }}
        onClick={getResponse}
      >
        {reply}
      </div>
    </>
  );
};

export default Eightball;
