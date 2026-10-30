function DarkScreen({ modal }){
    return(
        <div id="dark-screen" className="bg-black/40 h-screen w-screen fixed inset-0 z-40" onClick={() => {
            modal(false)
        }}></div>
    )
}

export default DarkScreen