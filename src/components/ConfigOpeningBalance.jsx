import { useState } from "react"

function ConfigOpeningBalance() {
    const [isModalOpen, setisModalOpen] = useState(false)

    return(
        <span>
            <button onClick={() => setisModalOpen(true)} className="bg-[#144241] py-1.5 px-3.5 text-app-primary rounded-md my-1 text-[0.9em]">Definir saldo inicial</button>
            
            {isModalOpen && (
                <div className="w-[370px] h-[280px] bg-[#1A293A] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-4 flex flex-col justify-between rounded-[14px] border border-app-outline/15">
                    <div className="px-6 h-full flex flex-col justify-between">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-app-primary text-[1.2em]">Definir saldo inicial</h1>
                            <p className="text-[0.9em] text-app-secondary">Informe o valor que você já possui no momento de começar a usar o FinnanceApp</p>
                        </div>
                        <label htmlFor="" className="">
                            <h1 className="text-app-primary">Saldo inicial (R$)</h1>
                            <div className="flex mt-1">
                                <div className=" flex justify-center items-center bg-app-outline/15 text-app-primary py-1.5 px-3.5 rounded-l-md">
                                    <h1>R$</h1>
                                </div>
                                <input type="text" name="" id="" placeholder="Saldo inicial aqui" className="bg-[#131E2C] w-full rounded-r-md text-app-primary pl-3 border border-app-outline/15 border-l-0 outline-none"/>
                            </div>
                        </label>
                    </div>
                    <div className="border-t-1 border-app-outline/15 px-6 py-4 mt-3.5 flex justify-end gap-2.5">
                        <button onClick={() => setisModalOpen(false)} className="border border-app-outline/15 px-4.5 py-1.5 text-app-primary rounded-md">Cancelar</button>
                        <button className="bg-[#42DEB0] px-4.5 py-1.5 rounded-md">Salvar</button>
                    </div>
                </div>
            )}
        </span>
    )
}

export default ConfigOpeningBalance