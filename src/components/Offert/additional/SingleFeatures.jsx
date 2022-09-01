import React, { useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import "./Features.css";

const SingleFeatures = (feature) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="item2" key={feature.id}>
      <div
        className={`item-head flex flex-between ${
          isActive ? "item-head-border" : null
        }`}
        onClick={() => setIsActive(!isActive)}
      >
        <h1 className="h1-text">{feature.title}</h1>
        <div className={`item-icon ${isActive ? "item-icon-rotate" : ""}`}>
          <MdOutlineAddCircleOutline size={22} />
        </div>
      </div>
      <div className={`item-body ${isActive ? "item-body-show" : ""}`}>
        <p className="p-text">{feature.text}</p>
        <p className="p-text">{feature.text2}</p>
      </div>
    </div>
  );
};

export default SingleFeatures;
