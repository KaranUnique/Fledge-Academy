import React from "react";
import "./SakuraPetals.css";

export default function SakuraPetals() {
  const petals = [
    { id: 1, delay: 0, left: "10%", duration: 12 },
    { id: 2, delay: 2, left: "25%", duration: 15 },
    { id: 3, delay: 4, left: "45%", duration: 13 },
    { id: 4, delay: 1, left: "60%", duration: 14 },
    { id: 5, delay: 3, left: "75%", duration: 16 },
    { id: 6, delay: 5, left: "90%", duration: 11 },
    { id: 7, delay: 6, left: "35%", duration: 13.5 },
    { id: 8, delay: 4.5, left: "82%", duration: 14.5 },
  ];

  return (
    <div className="sakura-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="sakura-petal"
          style={{
            left: petal.left,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
}
