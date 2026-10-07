import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const summaryData = [
  {
    id: "totalbalance",
    label: "Saldo Total",
    value: "R$10,00",
    description: "Seu saldo atual",
    icon: "fa-solid fa-wallet",
    bgcolor: "bg-[#142E35]",
    bgcoloricon: "bg-[#13816A]",
  },
  {
    id: "montharrivals",
    label: "Entradas do mês",
    value: "R$10,00",
    description: "0% em relação ao mês anterior",
    icon: "fa-solid fa-arrow-right",
    bgcolor: "bg-[#12243D]",
    bgcoloricon: "bg-[#437FE2]",
  },
  {
    id: "monthoutflows",
    label: "Saidas do mês",
    value: "R$10,00",
    description: "0% em relação ao mês anterior",
    icon: "fa-solid fa-arrow-down-long",
    bgcolor: "bg-[#372432]",
    bgcoloricon: "bg-[#E25F68]",
  },
  {
    id: "goals",
    label: "Metas",
    value: "0%",
    description: "Você ainda não tem metas cadastradas",
    icon: "fa-solid fa-bullseye",
    bgcolor: "bg-[#242547]",
    bgcoloricon: "bg-[#6945AA]",
  },
];

const data = [
  { name: "Alimentação", value: 333 },
  { name: "Transporte", value: 850 },
  { name: "Lazer", value: 1400 },
  { name: "Estudos", value: 300 },
];

function Dashboard() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const formattedDate = today.toLocaleDateString("pt-br", options);

  const colors = ["#B92EEF", "#4A68D3", "#65C45A", "#FF8042"];

  return (
    <div className="w-full bg-[#0A1422] pl-[240px] min-h-screen">
      <div className="bg-[#0C1828] pt-[18px] pb-3.5 pl-5.5 pr-5.5 flex justify-between">
        <div className="relative">
          <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-[9px] text-[#89909C] text-[1em]"></i>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Buscar por descrição, categoria ou tag..."
            className="bg-[#1A293E] text-[#F7F8FA] w-[500px] pt-1.5 pb-1.5
                    pl-11 pr-1 rounded-[6px]"
          />
        </div>
        <div
          id="right-conner"
          className="flex justify-between items-center w-[132px]"
        >
          <div id="notification" className="flex justify-center items-center">
            <i className="fa-solid fa-bell text-[1.3em] text-[#89909C]"></i>
          </div>
          <div className="flex items-center justify-center gap-[5px]">
            <div
              id="icon"
              className="flex items-center justify-center
                        bg-[#1A293E] w-[32px] h-[32px] rounded-[50%]"
            >
              <h1 className="text-[#89909C]">G</h1>
            </div>
            <h1 className="text-[#89909C] text-[1.1em]">Gabriel</h1>
          </div>
        </div>
      </div>
      <div id="body" className="pl-5.5 pr-5.5 pt-3.5 pb-3.5 ">
        <div id="top-body" className="w-full flex justify-between items-center">
          <div>
            <h1 className="text-[#F7F8FA] text-[1.4em]">Olá, Gabriel</h1>
            <p className="text-[#89909C] text-[0.9em]">
              Aqui está sua situação financeira
            </p>
          </div>
          <div className="text-[#89909C] flex gap-2.5">
            <p className="text-[0.9em]">{formattedDate}</p>
            <i class="fa-solid fa-calendar-days"></i>
          </div>
        </div>
        <div id="summary" className=" flex justify-between mt-[18px]">
          {summaryData.map((card) => [
            <div
              className={`${card.bgcolor} w-[255px] h-[160px] pt-4 pb-4 pl-4.5 pr-4.5 flex flex-col justify-between rounded-[14px] border border-[#F7F8FA]/15`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`${card.bgcoloricon} pt-2.5 pb-2.5 pl-3 pr-3 rounded-[8px] flex justify-between items-center`}
                >
                  <i className={`${card.icon} text-[1.2em] text-[#F7F8FA]`}></i>
                </div>
                <p className="text-[0.8em] text-[#89909C]">{card.label}</p>
              </div>
              <h1 className="text-[1.7em] text-[#F7F8FA]">{card.value}</h1>
              <p className="text-[0.8em] text-[#89909C]">{card.description}</p>
            </div>,
          ])}
        </div>
        <div id="charts" className="bg-amber-100 mt-[18px] flex justify-between">
          <div id="expenses" className="bg-[#141F2D] border border-[#F7F8FA]/15 flex flex-col p-[16px]">
            <h1>Gastos por categoria</h1>
            <PieChart width={320} height={300}>
              <Pie data={data} dataKey="value" label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
          <div id="goals" className="bg-[#141F2D] w-[200px] border border-[#F7F8FA]/15">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
