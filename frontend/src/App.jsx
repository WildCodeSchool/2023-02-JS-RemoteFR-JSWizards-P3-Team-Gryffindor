// import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import AdminBar from "./Components/AdminBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AdminBar />
      <Home />

      <p>coucou</p>
    </div>
  );
}

export default App;
