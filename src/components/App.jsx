import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import winter from "../images/img.jpg";

function App() {
  return (
    <div
      className="main-container"
      style={{
        background: `url(${winter})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="card-container">
        <Card />
      </div>
    </div>
  );
}

export default App;
