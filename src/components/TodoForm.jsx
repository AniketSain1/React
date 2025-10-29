import React, { useState } from 'react';
import api from '../api/axios';

function TodoForm({ onSuccess }) {
  const [task, setTask] = useState({
    title:"",
    completed:false
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();

    if (!task.title.trim()) return;

    setLoading(true);
    api.post('/todos', task)
      .then(() => {
        setTask('');
        setLoading(false);
        if (onSuccess) onSuccess();
      })
      .catch(() => {
        setError('Failed to add todo');
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={task.title}
        onChange={e => setTask({...prompt, "title":e.target.value})}
        placeholder="Enter new todo"
        disabled={loading}
      />
      <button type="submit" disabled={loading}>Add</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default TodoForm;
