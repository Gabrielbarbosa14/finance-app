import { useEffect, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen || isModalOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isModalOpen]);

  return (
    <div className={`min-h-screen flex `}>
      <Sidebar isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <main className="flex-1 min-w-0">
        <header className="bg-sky-300 w-full max-h-min">
          <SearchBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                openingBalance={openingBalance}
                setOpeningBalance={setOpeningBalance}
                isModalOpen={isModalOpen}
                setisModalOpen={setisModalOpen}
              />
            }
          />
          <Route path="/entries" element={<Lancamentos />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
