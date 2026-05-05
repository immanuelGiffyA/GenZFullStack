import React, { useState, useRef } from "react";
import { MAX_LENGTH, MAX_TODOS } from "../utils/constants";

export default function AddForm({ onAdd, totalCount }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("med");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const atMax = totalCount >= MAX_TODOS;

  const handleSubmit = () => {
    const result = onAdd(text, priority);
    if (result.error) {
      setError(result.error);
      return;
    }
    setText("");
    setError("");
    inputRef.current?.focus();
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSubmit();
    if (e.key === "Escape") {
      setText("");
      setError("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
    if (error) setError("");
  };

  return (
    <div>
      <div className="add-form">
        <input
          ref={inputRef}
          className={`add-input${error ? " error" : ""}`}
          value={text}
          onChange={handleChange}
          onKeyDown={handleKey}
          placeholder={atMax ? `Limit of ${MAX_TODOS} reached` : "Add a new task…"}
          maxLength={MAX_LENGTH + 1}
          disabled={atMax}
          autoFocus
        />
        <select
          className="priority-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          disabled={atMax}
          title="Priority"
        >
          <option value="high">!! High</option>
          <option value="med">· Med</option>
          <option value="low">· Low</option>
        </select>
        <button
          className="btn btn-add"
          onClick={handleSubmit}
          disabled={atMax || !text.trim()}
          title="Add task (Enter)"
        >
          Add
        </button>
      </div>
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}
 