import { useState, useCallback } from "react";
import { generateId, sanitize } from "../utils/helpers";
import { MAX_LENGTH, MAX_TODOS } from "../utils/constants";

const INITIAL_TODOS = [
  { id: generateId(), text: "Design the component tree", done: true, priority: "high", createdAt: Date.now() - 9000 },
  { id: generateId(), text: "Handle all edge cases properly", done: false, priority: "high", createdAt: Date.now() - 6000 },
  { id: generateId(), text: "Add priority levels", done: false, priority: "med", createdAt: Date.now() - 3000 },
  { id: generateId(), text: "Write clean readable code", done: false, priority: "low", createdAt: Date.now() },
];

export function useTodos() {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const addTodo = useCallback(
    (text, priority) => {
      if (todos.length >= MAX_TODOS)
        return { error: `Maximum of ${MAX_TODOS} todos reached.` };

      const clean = sanitize(text);
      if (!clean) return { error: "Task cannot be empty." };
      if (clean.length > MAX_LENGTH)
        return { error: `Max ${MAX_LENGTH} characters allowed.` };

      const duplicate = todos.find(
        (t) => t.text.toLowerCase() === clean.toLowerCase() && !t.done
      );
      if (duplicate)
        return { error: "An identical active task already exists." };

      setTodos((prev) => [
        { id: generateId(), text: clean, done: false, priority, createdAt: Date.now() },
        ...prev,
      ]);
      return {};
    },
    [todos]
  );

  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const editTodo = useCallback((id, text) => {
    const clean = sanitize(text);
    if (!clean) return { error: "Task cannot be empty." };
    if (clean.length > MAX_LENGTH)
      return { error: `Max ${MAX_LENGTH} characters allowed.` };

    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: clean } : t))
    );
    return {};
  }, []);

  const changePriority = useCallback((id, priority) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, priority } : t))
    );
  }, []);

  const clearDone = useCallback(() => {
    setTodos((prev) => prev.filter((t) => !t.done));
  }, []);

  const markAllDone = useCallback(() => {
    setTodos((prev) => prev.map((t) => ({ ...t, done: true })));
  }, []);

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    changePriority,
    clearDone,
    markAllDone,
  };
}
