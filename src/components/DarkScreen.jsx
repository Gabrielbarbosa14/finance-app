function DarkScreen({ onClose }){
    return(
        <div id="dark-screen" className="bg-black/40 h-screen w-screen fixed inset-0 z-3" onClick={onClose}></div>
    )
}

export default DarkScreen