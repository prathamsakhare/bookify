// ! Router
import { Routes, Route } from "react-router-dom";

// ! Pages
import Register from "./pages/Register";
import Login from "./pages/Login";

// ! CSS
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/login' element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
