import React from "react";

const MESSAGES = {
  all:    ["No tasks yet",  "Add something above to get started."],
  active: ["All done!",     "No active tasks remaining."],
  done:   ["Nothing here",  "Complete a task to see it here."],
};

export default function EmptyState({ filter }) {
  const [title, sub] = MESSAGES[filter] ?? MESSAGES.all;

  return (
    <div className="empty-state">
      <div className="empty-icon">○</div>
      <div>{title}</div>
      <div style={{ marginTop: 4, fontSize: 11, opacity: 0.7 }}>{sub}</div>
    </div>
  );
}
