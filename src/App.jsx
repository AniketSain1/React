import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Todo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </div>
  );
}

export default App;
