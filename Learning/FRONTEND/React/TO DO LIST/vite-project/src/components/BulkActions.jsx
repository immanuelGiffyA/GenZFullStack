import React from "react";

export default function BulkActions({ hasDone, hasActive, onClearDone, onMarkAllDone }) {
  return (
    <div className="bulk-row">
      <button
        className="bulk-btn"
        onClick={onMarkAllDone}
        disabled={!hasActive}
        style={{ opacity: hasActive ? 1 : 0.3 }}
      >
        mark all done
      </button>
      <button
        className="bulk-btn danger"
        onClick={onClearDone}
        disabled={!hasDone}
        style={{ opacity: hasDone ? 1 : 0.3 }}
      >
        clear completed
      </button>
    </div>
  );
}
