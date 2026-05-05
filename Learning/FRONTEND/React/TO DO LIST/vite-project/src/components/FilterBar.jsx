import React from "react";
import { FILTERS } from "../utils/constants";

export default function FilterBar({ filter, setFilter, counts }) {
  return (
    <div className="filters">
      {FILTERS.map((f) => (
        <button
          key={f}
          className={`filter-btn${filter === f ? " active" : ""}`}
          onClick={() => setFilter(f)}
        >
          {f}{" "}
          {counts[f] > 0 && <span style={{ opacity: 0.7 }}>({counts[f]})</span>}
        </button>
      ))}
    </div>
  );
}
