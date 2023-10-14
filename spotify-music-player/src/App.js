import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import { setClientToken } from "./spotify"
import HomePage from './pages/HomePage';
import Library from './pages/Library';
import Feed from './pages/Feed';
import Player from './pages/Player';
import Sidebar from './components/sidebar/sidebar';
import Login from './auth/login';
import { useState, useEffect } from "react"

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return (!token ? (
    <Login />
  ) : (
    <div className="bg-slate-950 min-h-screen">
      <Router>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/player" element={<Player/>}/>
        </Routes>
      </Router>
      </div>
  ));
}

export default App;
