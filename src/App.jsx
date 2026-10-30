import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Lancamentos from "./components/entries";
import Goals from "./components/Goals";
import Budgets from "./components/Budgets";
import Reports from "./components/Reports";
import SearchBar from "./components/SearchBar";
import { Route, Routes } from "react-router-dom";

function App() {
  const [openingBalance, setOpeningBalance] = useState(null);

  return (
    <div className="min-h-screen min-w-screen flex">
      <Sidebar/>
      <div className="w-full">
        <SearchBar />
        <Routes >
          <Route path="/" element={<Dashboard openingBalance={openingBalance} setOpeningBalance={setOpeningBalance}/>}/>
          <Route path="/entries" element={<Lancamentos />}/>
          <Route path="/goals" element={<Goals />}/>
          <Route path="/budgets" element={<Budgets />}/>
          <Route path="/reports" element={<Reports />}/>
          <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
