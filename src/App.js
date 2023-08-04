// ! Router
import { Routes, Route } from "react-router-dom";

// ! Pages
import Register from "./pages/Register";

// ! CSS
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>} />
      <Route path='/login' element={<h1>Login</h1>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
