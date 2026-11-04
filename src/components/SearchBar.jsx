function SearchBar({ menuOpen, setMenuOpen }) {
  return (
    <div className="bg-app-header pt-[18px] pb-3.5 pl-5.5 pr-5.5 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3.5 text-app-primary">
          <button
            type="button"
            onClick={() => {
              setMenuOpen((open) => !open)
            }}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="sidebar-navigation"
            className="text-[2em] lg:hidden"
          >
            ☰
          </button>
          <div className="flex gap-1.5 items-center">
            <i className={`fa-solid fa-wallet text-app-primary text-[1em]`} />
            <h1>Finnance</h1>
          </div>
        </div>
        <div
          id="right-conner"
          className="flex justify-between items-center w-[132px]"
        >
          <div id="notification" className="flex justify-center items-center">
            <i className="fa-solid fa-bell text-[1.3em] text-app-secondary"></i>
          </div>
          <div className="flex items-center justify-center gap-[5px]">
            <div
              id="icon"
              className="flex items-center justify-center
              bg-app-input w-[32px] h-[32px] rounded-[50%]"
            >
              <h1 className="text-app-secondary">G</h1>
            </div>
            <h1 className="text-app-secondary text-[1.1em]">Gabriel</h1>
          </div>
        </div>
      </div>
      <div className="relative">
        <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-[9px] text-app-secondary text-[1em]"></i>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Buscar por descrição, categoria ou tag..."
          className="bg-app-input text-app-primary w-full pt-1.5 pb-1.5
          pl-11 pr-1 rounded-[6px] text-[0.9em]"
        />
      </div>
    </div>
  );
}

export default SearchBar;
