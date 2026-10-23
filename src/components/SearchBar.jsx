function SearchBar() {
  return (
    <div className="bg-app-header pt-[18px] pb-3.5 pl-5.5 pr-5.5 flex justify-between">
      <div className="relative">
        <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-[9px] text-app-secondary text-[1em]"></i>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Buscar por descrição, categoria ou tag..."
          className="bg-app-input text-app-primary w-[500px] pt-1.5 pb-1.5
                    pl-11 pr-1 rounded-[6px]"
        />
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
  );
}

export default SearchBar;
