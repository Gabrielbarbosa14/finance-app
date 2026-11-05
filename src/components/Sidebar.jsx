import { Link } from "react-router-dom";
import DarkScreen from "./DarkScreen";
const settings = [
  {
    id: "settings",
    label: "Configurações",
    path: "settings",
    icon: "fa-solid fa-gear",
  },
];

const topLink = [
  { id: "appname", label: "Finance", icon: "fa-solid fa-wallet" },
];

const links = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: "fa-solid fa-sliders",
  },
  {
    id: "entries",
    label: "Lançamentos",
    path: "/entries",
    icon: "fa-solid fa-right-left",
  },
  { id: "goals", label: "Metas", path: "/goals", icon: "fa-solid fa-bullseye" },
  {
    id: "budget",
    label: "Orçamento",
    path: "/budgets",
    icon: "fa-regular fa-clipboard",
  },
  {
    id: "reports",
    label: "Relatórios",
    path: "/reports",
    icon: "fa-solid fa-chart-pie",
  },
];

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen && <DarkScreen onClose={() => setIsOpen(false)} />}
      <aside
        className={`bg-app-sidebar
        fixed top-0 left-0 bottom-0 z-20 flex h-screen w-[200px] shrink-0 flex-col items-center justify-between
        pt-5 pb-5 transition-transform duration-250 lg:sticky lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        id="sidebar-navigation"
      >
        {topLink.map((link) => (
          <div
            key={link.id}
            className="w-[170px] flex justify-start items-center gap-3.5 px-[10px] py-[4px]"
          >
            <i className={`${link.icon} text-app-primary text-[1.3em]`} />
            <h1 className="text-[1.4em] text-app-primary">{link.label}</h1>
          </div>
        ))}
        <hr className="bg-app-outline h-[1.5px] w-full border-none mt-4 mb-4" />
        <div className="flex flex-col w-[170px] gap-[13px] mb-auto">
          {links.map((item) => (
            <Link
              to={item.path}
              key={item.id}
              onClick={() => setIsOpen(false)}
              className="group flex items-center w-full gap-2.5 rounded-[8px] px-[10px] py-[8px] hover:bg-app-hover"
            >
              <i className={`${item.icon} text-app-primary text-[1.1em]`} />
              <h1 className="text-app-primary">{item.label}</h1>
            </Link>
          ))}
        </div>
        <div>
          {settings.map((setting) => (
            <Link
              to={setting.path}
              className="flex justify-start items-center gap-2.5 w-[170px] hover:bg-app-hover px-[10px] py-[8px] rounded-[8px]"
              key={setting.id}
              onClick={() => setIsOpen(false)}
            >
              <i className={`${setting.icon} text-app-primary text-[1.1em]`} />
              <h1 className="text-app-primary w-full">{setting.label}</h1>
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
