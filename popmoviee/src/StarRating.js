import React from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const ContainerStarStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "0",
  margin: "0",
};

const starStyle = {
  width: "48px",
  color: "yellow",
  fontSize: "4px",
  cursor: "pointer",
};

export default function StarRating({ max }) {
  return (
    <div style={containerStyle}>
      <div style={ContainerStarStyle}>
        {Array.from({ length: max }, (_, i) => (
          <span>{`Star${i + 1}`}</span>
        ))}
      </div>
      <p style={textStyle}>{max}</p>
    </div>
  );
}
