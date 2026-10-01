function Dashboard() {
    return(
        <div className="w-full bg-">
            <div className="bg-[#0C1828] pt-3.5 pb-3.5 pl-5.5 pr-5.5 flex justify-between">
                <div className="relative">
                    <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-3 text-[#89909C] text-[1.1em]"></i>
                    <input type="text"
                    name="search"
                    id="search"
                    placeholder="Buscar por descrição, categoria ou tag..."
                    className="bg-[#1A293E] text-[#F7F8FA] w-[500px] pt-2.5 pb-2.5
                    pl-11 pr-1 rounded-[6px]"  />
                </div>
                <div id="right-conner" className="flex justify-between items-center w-[134px]">
                    <div id="notification" className="flex justify-center items-center">
                        <i className="fa-solid fa-bell text-[1.3em] text-[#89909C]"></i>
                    </div>
                    <div className="flex items-center justify-center gap-[5px]">
                        <div id="icon" className="flex items-center justify-center
                        bg-[#1A293E] w-[35px] h-[35px] rounded-[50%]">
                            <h1 className="text-[#89909C]">G</h1>
                        </div>
                        <h1 className="text-[#89909C] text-[1.1em]">Gabriel</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard