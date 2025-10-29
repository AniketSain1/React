import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import TodoList from '../components/TodoList.jsx';


function Home() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/todos?_limit=10')
      .then(res => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load todos');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading todos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Home;
