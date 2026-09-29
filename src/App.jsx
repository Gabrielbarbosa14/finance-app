import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Lancamentos from "./components/NewReleases";
import Goals from "./components/Goals";
import Budgets from "./components/Budgets";
import Reports from "./components/Reports";
import { Link, Route, Routes } from "react-router-dom";

function About() {
  return <h1>About Page kkkkk</h1>
}

function App() {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/about" element={<About />}/> 
        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
