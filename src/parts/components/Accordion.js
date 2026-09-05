"use client";
import { useState } from "react";

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordions">
      {items.map((item, index) => (
        <div className={`accordion-item ${activeIndex === index ? "accordion-active" : ""}`} key={index}>
          <button className="accordion-title" onClick={() => toggleItem(index)}>
            {item.title}
          </button>
          <div className="accordion-content">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}