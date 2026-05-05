import React from "react";
import TodoItem from "./TodoItem";
import EmptyState from "./EmptyState";

export default function TodoList({ todos, filter, onToggle, onDelete, onEdit, onPriorityChange }) {
  if (todos.length === 0) return <EmptyState filter={filter} />;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          onPriorityChange={onPriorityChange}
        />
      ))}
    </ul>
  );
}
