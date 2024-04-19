import React from "react";
import "./styles.css";

export const InfoCard = ({
  borderColor = "--dark-blue",
  bgColor = "--white",
  textcolor = "--dark-blue",
  cardTitle = "Hello",
  cardBody = "Lorem Ipsum",
  className = "",
}) => {
  return (
    <div
      className={`card-wrapper ${className}`}
      style={{
        borderColor: `var(${borderColor})`,
        color: `var(${textcolor})`,
        backgroundColor: `var(${bgColor})`,
      }}
    >
      <h2 className="card-title">{cardTitle}</h2>
      <p className="card-body">{cardBody}</p>
    </div>
  );
};
