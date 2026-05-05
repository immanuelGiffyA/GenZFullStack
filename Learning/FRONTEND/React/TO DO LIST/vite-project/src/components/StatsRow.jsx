import React from "react";

export default function StatsRow({ total, done, active }) {
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <>
      <div className="progress-bar-wrap">
        <div className="progress-bar" style={{ width: `${pct}%` }} />
      </div>
      <div className="stats-row">
        <span><span className="stat">{active}</span> remaining</span>
        <span><span className="stat">{done}</span> completed</span>
        <span><span className="stat">{pct}%</span> done</span>
      </div>
    </>
  );
}
