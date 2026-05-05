import React from "react";

export default function Checkbox({ checked, onChange }) {
  return (
    <button
      className={`checkbox${checked ? " checked" : ""}`}
      onClick={onChange}
      aria-label={checked ? "Mark incomplete" : "Mark complete"}
      title={checked ? "Mark incomplete" : "Mark complete"}
    >
      {checked && <span className="check-icon">✓</span>}
    </button>
  );
}
