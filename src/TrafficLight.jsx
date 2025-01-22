import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Index.css";

const TrafficLight = () => {
  const [activeLight, setActiveLight] = useState(null);

  const handleLightClick = (light) => {
    setActiveLight(light);
  };

  return (
    <div className="container">
      <div className="holder"></div>
      <div className="frame">
        <div
          className={`red ${activeLight === "red" ? "red highlight" : "red"}`}
          onClick={() => handleLightClick("red")}
        ></div>
        <div
          className={`yellow ${
            activeLight === "yellow" ? "yellow highlight" : "yellow"
          }`}
          onClick={() => handleLightClick("yellow")}
        ></div>
        <div
          className={`green ${
            activeLight === "green" ? "green highlight" : "green"
          }`}
          onClick={() => handleLightClick("green")}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;
