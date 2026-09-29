import { Link } from "react-router-dom"

const settings = [
  {id: "settings", label: "Configurações", icon: "fa-solid fa-gear"}
]

const topLink = [
  {id: "appname", label: "Finance", icon: "fa-solid fa-wallet"}
]

const links = [
  {id: "dashboard", label: "Dashboard", path: "/", icon: "fa-solid fa-sliders"},
  {id: "entries", label: "Lançamentos", path: "/entries", icon: "fa-solid fa-right-left"},
  {id: "goals", label: "Metas", path: "/goals", icon: "fa-solid fa-bullseye"},
  {id: "budget", label: "Orçamento", path: "/budget", icon: "fa-regular fa-clipboard"},
  {id: "reports", label: "Relatórios", path: "/reports", icon: "fa-solid fa-chart-pie"}
]

function Sidebar() {
  return (
    <div className="bg-[#1F2430] w-[255px] flex flex-col justify-between items-center pt-5 pb-5">
      {topLink.map((link) => [
        <div key={link.id} className="w-[170px] flex justify-start items-center gap-3.5 px-[10px] py-[7px]">
          <i className={`${link.icon} text-[#F7F8FA] text-[1.4em]`} />
          <h1 className="text-[1.5em] text-[#F7F8FA]">{link.label}</h1>
        </div>
      ])}
      <hr className="bg-[#F7F8FA] h-[1.5px] w-full border-none mt-5 mb-5"/>
      <div className="flex flex-col justify-center items-center gap-[21px] mb-auto">
        {links.map((item) => [
          <Link to={item.path} key={item.id} className="group flex justify-start items-center gap-2.5 w-[170px] rounded-[8px] px-[11px] py-[8px] hover:bg-[#666e7e] hover: ">
            <i className={`${item.icon} text-[#F7F8FA] text-[1.1em]`} />
            <h1 className="text-[#F7F8FA] text-[1.2em]">{item.label}</h1>
          </Link>
        ])}
      </div>
      <div>
        {settings.map((setting) => [
          <div className="flex justify-start items-center gap-2.5 w-[170px] hover:bg-amber-200 hover:text-black">
            <i className={`${setting.icon} text-[#F7F8FA] text-[1.1em]`} />
            <h1 className="text-[#F7F8FA] text-[1.2em] w-full">{setting.label}</h1>
          </div>
        ])}
      </div>
    </div>
  )
}

export default Sidebar