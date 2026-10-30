import { useState } from "react";
import DarkScreen from "./DarkScreen";

function ConfigOpeningBalance({ onSave, openingBalance }) {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [balance, setBalance] = useState("");

  function handleSave(event) {
    event.preventDefault();

    const amount = (Number(balance))

    if (!Number.isFinite(amount)) {
      event.currentTarget.reportValidity();
      return;
    }

    onSave(amount);
    setisModalOpen(false);
  }

  return (
    <div>
      <button
        onClick={() => {
          setisModalOpen(true);
          setBalance(openingBalance !== null ? String(openingBalance) : "");
        }}
        className="bg-[#144241] py-1.5 px-3.5 text-app-primary rounded-md my-1 text-[0.9em]"
      >
        {openingBalance !== null ? 'Alterar saldo' : 'Definir saldo inicial'}
      </button>
      {isModalOpen && <DarkScreen modal={setisModalOpen}/>}
      {isModalOpen && (
        <form
          onSubmit={handleSave}
          className="w-[370px] h-[280px] bg-[#1A293A] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pt-4 flex flex-col justify-between rounded-[14px] border border-app-outline/15 z-50"
        >
          <div className="px-6 h-full flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <h1 className="text-app-primary text-[1.2em]">
                Definir saldo inicial
              </h1>
              <p className="text-[0.9em] text-app-secondary">
                Informe o valor que você já possui no momento de começar a usar
                o FinnanceApp
              </p>
            </div>
            <label htmlFor="opening-balance" className="">
              <h1 className="text-app-primary">Saldo inicial (R$)</h1>
              <div className="flex mt-1">
                <div className=" flex justify-center items-center bg-app-outline/15 text-app-primary py-1.5 px-3.5 rounded-l-md">
                  <h1>R$</h1>
                </div>
                <input
                  type="number"
                  name="openingBalance"
                  id="opening-balance"
                  value={balance}
                  min={0}
                  onChange={(event) => setBalance(event.target.value)}
                  step="0.01"
                  required
                  placeholder="Saldo inicial aqui"
                  className="bg-[#131E2C] w-full rounded-r-md text-app-primary pl-3 border border-app-outline/15 border-l-0 outline-none"
                />
              </div>
            </label>
          </div>
          <div className="border-t-1 border-app-outline/15 px-6 py-4 mt-3.5 flex justify-end gap-2.5">
            <button
              type="button"
              onClick={() => setisModalOpen(false)}
              className="border border-app-outline/15 px-4.5 py-1.5 text-app-primary rounded-md"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-[#42DEB0] px-4.5 py-1.5 rounded-md"
            >
              Salvar
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default ConfigOpeningBalance;
