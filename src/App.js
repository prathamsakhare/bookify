// ! Router
import { Routes, Route } from "react-router-dom";

// ! Pages
import Register from "./pages/Register";
import Login from "./pages/Login";

// ! CSS
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from "./components/Navbar";
import List from "./pages/List";
import Home from "./pages/Home";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/book/list" element={<List />} />
    </Routes>
    </>
  );
}

export default App;
