import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/auth/login.jsx'
import './styles/index.css';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<div>Contact</div>} />
          <Route path="*" element={<div>1</div>} />
      </Routes>
    </BrowserRouter>
  );
}

