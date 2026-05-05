import React, { useState, useRef, useEffect } from "react";
import Checkbox from "./Checkbox";
import { MAX_LENGTH } from "../utils/constants";

export default function TodoItem({ todo, onToggle, onDelete, onEdit, onPriorityChange }) {
  const [editing, setEditing] = useState(false);
  const [editVal, setEditVal] = useState(todo.text);
  const [editError, setEditError] = useState("");
  const editRef = useRef(null);

  useEffect(() => {
    if (editing) {
      editRef.current?.focus();
      editRef.current?.select();
    }
  }, [editing]);

  const startEdit = () => {
    if (todo.done) return; // completed tasks cannot be edited
    setEditVal(todo.text);
    setEditError("");
    setEditing(true);
  };

  const saveEdit = () => {
    const result = onEdit(todo.id, editVal);
    if (result.error) {
      setEditError(result.error);
      return;
    }
    setEditing(false);
    setEditError("");
  };

  const cancelEdit = () => {
    setEditing(false);
    setEditVal(todo.text);
    setEditError("");
  };

  const handleEditKey = (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") cancelEdit();
  };

  return (
    <li className={`todo-item${todo.done ? " done" : ""}`}>
      <Checkbox checked={todo.done} onChange={() => onToggle(todo.id)} />

      <span className={`priority-dot p-${todo.priority}`} title={`Priority: ${todo.priority}`} />

      <div className="todo-text-wrap">
        {editing ? (
          <>
            <input
              ref={editRef}
              className="todo-edit-input"
              value={editVal}
              onChange={(e) => { setEditVal(e.target.value); setEditError(""); }}
              onKeyDown={handleEditKey}
              maxLength={MAX_LENGTH + 1}
            />
            {editError && (
              <div style={{ fontSize: 11, color: "#c06060", marginTop: 2, fontFamily: "Courier New" }}>
                {editError}
              </div>
            )}
          </>
        ) : (
          <span
            className={`todo-text${todo.done ? " done" : ""}`}
            onDoubleClick={startEdit}
            title={todo.done ? "" : "Double-click to edit"}
          >
            {todo.text}
          </span>
        )}
      </div>

      {/* Priority selector – hidden when editing or done */}
      {!editing && !todo.done && (
        <select
          className="priority-select"
          value={todo.priority}
          onChange={(e) => onPriorityChange(todo.id, e.target.value)}
          title="Change priority"
          onClick={(e) => e.stopPropagation()}
          style={{ fontSize: 10 }}
        >
          <option value="high">!!</option>
          <option value="med">·</option>
          <option value="low">–</option>
        </select>
      )}

      <div className="item-actions">
        {editing ? (
          <>
            <button className="icon-btn save-btn" onClick={saveEdit} title="Save (Enter)">✓</button>
            <button className="icon-btn del-btn" onClick={cancelEdit} title="Cancel (Esc)">✕</button>
          </>
        ) : (
          <>
            {!todo.done && (
              <button className="icon-btn edit-btn" onClick={startEdit} title="Edit task">✎</button>
            )}
            <button className="icon-btn del-btn" onClick={() => onDelete(todo.id)} title="Delete task">✕</button>
          </>
        )}
      </div>
    </li>
  );
}
