import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';

function App() {
  return (
    <div>
      <nav>
        <Link to="/" style={{color: "black",
      textDecoration: "none",
      fontWeight:"bold",
      margin: "0 15px",
      fontSize: "18px",
      fontWeight: "500",
      transition: "color 0.3s",}}>Home</Link > | <Link to="/add" style={{color: "black",
      textDecoration: "none",
      fontWeight:"bold",
      margin: "0 15px",
      fontSize: "18px",
      fontWeight: "500",
      transition: "color 0.3s",}}>Add Todo</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </div>
  );
}

export default App;
