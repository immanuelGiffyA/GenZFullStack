import React, { useState } from "react";
import { useTodos } from "./hooks/useTodos";
import { PRIORITY_ORDER } from "./utils/constants";

import AddForm     from "./components/AddForm";
import FilterBar   from "./components/FilterBar";
import StatsRow    from "./components/StatsRow";
import BulkActions from "./components/BulkActions";
import TodoList    from "./components/TodoList";

export default function App() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    changePriority,
    clearDone,
    markAllDone,
  } = useTodos();

  const [filter, setFilter]   = useState("all");
  const [sortBy, setSortBy]   = useState("date");

  const total  = todos.length;
  const done   = todos.filter((t) => t.done).length;
  const active = total - done;

  const filtered = todos.filter((t) => {
    if (filter === "active") return !t.done;
    if (filter === "done")   return t.done;
    return true;
  });

  const sorted = [...filtered].sort((a, b) =>
    sortBy === "priority"
      ? PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority]
      : b.createdAt - a.createdAt
  );

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">Taskboard</h1>
        <p className="app-subtitle">React · Component-driven · Edge-safe</p>
      </header>

      <AddForm onAdd={addTodo} totalCount={total} />

      <StatsRow total={total} done={done} active={active} />

      <FilterBar
        filter={filter}
        setFilter={setFilter}
        counts={{ all: total, active, done }}
      />

      <BulkActions
        hasDone={done > 0}
        hasActive={active > 0}
        onClearDone={clearDone}
        onMarkAllDone={markAllDone}
      />

      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "0.75rem" }}>
        <label style={{ fontSize: 11, fontFamily: "Courier New", color: "#4a4945", display: "flex", gap: 6, alignItems: "center" }}>
          sort:
          <select className="priority-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="date">newest</option>
            <option value="priority">priority</option>
          </select>
        </label>
      </div>

      <TodoList
        todos={sorted}
        filter={filter}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
        onPriorityChange={changePriority}
      />
    </div>
  );
}
