import "./App.css";
import { Link } from "react-router-dom";
import Dashboard from "./assets/componet/Dashboard";
import Login from "./assets/componet/Login";
import Register from "./assets/componet/register";
import Index from "./assets/componet/index";

function App() {
  return (
    <>
      <Dashboard />
      <Login />
      <Register />
      <Index />
    </>
  );
}

export default App;
