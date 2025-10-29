import React from 'react';
import TodoForm from '../components/TodoForm';
import { useNavigate } from 'react-router-dom';

function AddTodo() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Add New Todo</h1>
      <TodoForm onSuccess={() => navigate('/')} />
    </div>
  );
}

export default AddTodo;
