//# todo item UI + logic
import React, { useState } from 'react';
import api from '../api/axios';

function TodoItem({ todo, setTodos }) {
  const [loading, setLoading] = useState(false);

  const toggleCompleted = () => {
    setLoading(true);
    api.patch(`/todos/${todo.id}`, { completed: !todo.completed })
      .then(res => {
        setTodos(prev => prev.map(t => (t.id === todo.id ? res.data : t)));
        setLoading(false);
      })
      .catch(() => {
        alert('Failed to update todo');
        setLoading(false);
      });
  };

  // Delete todo
  const deleteTodo = () => {
    setLoading(true);
    api.delete(`/todos/${todo.id}`)
      .then(() => {
        setTodos(prev => prev.filter(t => t.id !== todo.id));
        setLoading(false);
      })
      .catch(() => {
        alert('Failed to delete todo');
        setLoading(false);
      });
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleCompleted}
        disabled={loading}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <button onClick={deleteTodo} disabled={loading}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
