import {
  PieChart,
  Pie,
  Cell,
} from "recharts";
import ConfigOpeningBalance from "./ConfigOpeningBalance";

const colors = ["#B92EEF", "#4A68D3", "#65C45A", "#FF8042"];

const summaryData = [
  {
    id: "totalbalance",
    label: "Saldo Total",
    value: "R$0,00",
    description: "Seu saldo atual",
    icon: "fa-solid fa-wallet",
    bgcolor: "bg-summary-balance",
    bgcoloricon: "bg-summary-balance-icon",
  },
  {
    id: "montharrivals",
    label: "Entradas do mês",
    value: "R$0,00",
    description: "0% em relação ao mês anterior",
    icon: "fa-solid fa-arrow-right",
    bgcolor: "bg-summary-income",
    bgcoloricon: "bg-summary-income-icon",
  },
  {
    id: "monthoutflows",
    label: "Saidas do mês",
    value: "R$0,00",
    description: "0% em relação ao mês anterior",
    icon: "fa-solid fa-arrow-down-long",
    bgcolor: "bg-summary-expenses",
    bgcoloricon: "bg-summary-expenses-icon",
  },
  {
    id: "goals",
    label: "Metas",
    value: "0%",
    description: "Você ainda não tem metas cadastradas",
    icon: "fa-solid fa-bullseye",
    bgcolor: "bg-summary-goals",
    bgcoloricon: "bg-summary-goals-icon",
  },
];

const data = [
  { name: "Alimentação", value: 333, icon: "fa-solid fa-cart-shopping" },
  { name: "Transporte", value: 850, icon: "fa-solid fa-car" },
  { name: "Lazer", value: 1400, icon: "fa-solid fa-gamepad" },
  { name: "Estudos", value: 300, icon: "fa-solid fa-book" },
];

function Dashboard({ openingBalance, setOpeningBalance }) {
  const today = new Date();

  const totalExpenses = data.reduce((total, entry) => total + entry.value, 0);

  const formatCurrency = (value) => 
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = today.toLocaleDateString("pt-br", options);

    return (
    <div className="min-w-full bg-app-background min-h-screen">
      <div id="body" className="pl-5.5 pr-5.5 pt-3.5 pb-3.5 ">
        <div id="top-body" className="w-full flex justify-between items-center">
          <div>
            <h1 className="text-app-primary text-[1.4em]">Olá, Gabriel</h1>
            <p className="text-app-secondary text-[0.9em]">
              Aqui está sua situação financeira
            </p>
          </div>
          <div className="text-app-secondary flex gap-2.5">
            <p className="text-[0.9em]">{formattedDate}</p>
            <i className="fa-solid fa-calendar-days"></i>
          </div>
        </div>
        <div id="summary" className=" flex justify-between mt-[18px]">
          {summaryData.map((card) => (
            <div
              className={`${card.bgcolor} w-[255px] h-[165px] pt-4 pb-4 pl-4.5 pr-4.5 flex flex-col justify-between rounded-[14px] border border-app-outline/15`} key={card.id}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`${card.bgcoloricon} pt-2.5 pb-2.5 pl-3 pr-3 rounded-[8px] flex justify-between items-center`}
                >
                  <i className={`${card.icon} text-[1.2em] text-app-primary`}></i>
                </div>
                <p className="text-[0.8em] text-app-secondary">{card.label}</p>
              </div>
              <h1 className="text-[1.6em] text-app-primary">{card.id === "totalbalance" && openingBalance === null ? "Não configurado" : card.id === "totalbalance" && openingBalance !== null ? openingBalance.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) : card.value }</h1>
              <p className="text-[0.8em] text-app-secondary">{card.description}</p>
              {card.id === "totalbalance" && openingBalance === null ? <ConfigOpeningBalance onSave={setOpeningBalance} openingBalance={openingBalance}/> : ""}
              {card.id === "totalbalance" && openingBalance !== null ? <ConfigOpeningBalance onSave={setOpeningBalance} openingBalance={openingBalance}/> : ""}
            </div>
          ))}
        </div>
        <div id="charts" className="mt-[18px] flex justify-between gap-4 items-stretch">
          <div
            id="expenses"
            className="bg-app-surface w-[56%] border rounded-[14px] border-app-outline/15 flex flex-col py-[12px] px-[18px]"
          >
            <div className="text-app-primary flex items-center gap-2.5 mb-1">
              <i className="fa-solid fa-chart-pie h-min text-[1.3em]"></i>
              <h1>Gastos por categoria</h1>
            </div>
            <div className="flex flex-1 min-h-0 items-center gap-4 pt-1">
              <div className="relative h-[160px] w-[160px] shrink-0">
                <PieChart
                  style={{ width: "100%", height: "100%" }}
                  responsive
                >
                  <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="58%"
                    outerRadius="88%"
                    paddingAngle={2}
                    stroke="none"
                  >
                    {data.map((entry, index) => (
                      <Cell key={entry.name} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                </PieChart>
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[0.8em] font-semibold text-app-primary">
                    {formatCurrency(totalExpenses)}
                  </span>
                  <span className="text-[0.8em] text-app-secondary">Total</span>
                </div>
              </div>
              <div className="min-w-0 flex-1">
                {data.map((entry, index) => (
                  <div
                    key={entry.name}
                    className="flex items-center gap-2.5 border-b border-app-outline/10 py-1.5 last:border-b-0 text-[0.9em]"
                  >
                    <span
                      className="h-3 w-3 shrink-0 rounded-full"
                      style={{ backgroundColor: colors[index % colors.length] }}
                    />
                    <i
                      className={`${entry.icon} w-4 shrink-0 text-center text-app-secondary`}
                      aria-hidden="true"
                    />
                    <span className="min-w-0 flex-1 truncate text-app-primary">
                      {entry.name}
                    </span>
                    <span className="text-app-primary">
                      {((entry.value / totalExpenses) * 100).toLocaleString(
                        "pt-BR",
                        { maximumFractionDigits: 1 },
                      )}%
                    </span>
                    <span className="min-w-[84px] text-right text-app-secondary">
                      {formatCurrency(entry.value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            id="goals"
            className="bg-app-surface border rounded-[14px] border-app-outline/15 w-[600px] p-[16px]"
          >
            <div id="top" className="flex justify-between items-center mb-6">
              <div id="icon-phrases" className="flex gap-3 items-center">
                <div
                  id="icon"
                  className="text-[1.2em] text-app-primary bg-goal-icon w-[45px] h-[45px] rounded-[50%] flex justify-center items-center"
                >
                  <i className="fa-solid fa-bullseye h-min w-min"></i>
                </div>
                <div id="phrases">
                  <h1 className="text-app-primary text-[1.25em]">Metas</h1>
                  <p className="text-[0.9em] text-app-secondary">
                    Seus objetivos e o progresso de cada um
                  </p>
                </div>
              </div>
              <div id="new-goal">
                <button className="border border-app-outline/15 px-3 py-2 flex justify-center items-center gap-2 text-app-primary rounded-[8px] hover:bg-app-hover hover:cursor-pointer">
                  <i className="fa-solid fa-plus"></i>
                  <h1 className="text-[0.95em]">Nova meta</h1>
                </button>
              </div>
            </div>
            <div id="goal" className="border border-app-outline/15 rounded-[8px] py-[14px] px-[16px]">
              <div id="content" className="flex flex-col gap-3.5 w-full">
                <div id="infos" className="flex items-center gap-3.5">
                  <div className="bg-goal-icon-secondary py-3.5 px-3 flex justify-center items-center rounded-[8px] text-[0.9em] text-app-primary">
                    <i id="icon" className="fa-solid fa-laptop"></i>
                  </div>
                  <div id="infos-details" className="flex flex-col">
                    <h1 className="text-[1.1em] text-app-primary">Notebook</h1>
                    <div id="money-time" className="flex text-[0.8em] items-center">
                      <div id="money" className="flex gap-2 items-center">
                        <i className="fa-solid fa-coins text-app-secondary"></i>
                        <p className="text-app-primary">R$ 4.000,00</p>
                      </div>
                      <div id="separatot" className="bg-app-secondary h-[4px] w-[4px] rounded-[50%] mx-2.5"></div>
                      <div id="time" className="flex gap-2 items-center ml-[3px]">
                        <i className="fa-solid fa-calendar text-app-secondary"></i>
                        <p className="text-app-primary">10 meses</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="progress-bar-accumulated" className="flex flex-col gap-2">
                  <div id="progress-bar">
                    <div id="total" className="h-4 rounded-[8px] bg-progress-track">
                      <div id="stored" className="h-4 rounded-[8px] bg-progress-fill w-[30%]"></div>
                    </div>
                  </div>
                  <div id="accumulated" className="flex justify-between text-[0.9em]">
                    <p className="text-app-secondary"><span className="text-app-primary">R$ 1.200,00</span> acumulados</p>
                    <p className="text-app-secondary">30%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
