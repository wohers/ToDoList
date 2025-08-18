import { NavLink } from "react-router-dom";
import { MdToday, MdDoneAll } from "react-icons/md";
import { FaUser, FaInbox, FaCalendarAlt, FaPlus } from "react-icons/fa";
import { IoSettings, IoLogOut } from "react-icons/io5";
import { GrSupport } from "react-icons/gr";

export const Slider = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-[280px] bg-[#3A3A3A] shadow-lg p-5 flex flex-col">
      <aside className="flex-1">
        <nav className="flex flex-col h-full">
          <div>
            <div className="flex gap-[10px] mb-2.5 border-b-2 border-gray-500 items-center pb-2.5 pl-3">
              <FaUser className="w-[20px] h-[20px]" />
              <span className="text-[16px] mt-1">User</span>
            </div>
            <div className="space-y-2">
              <button className="flex items-center px-3 py-2 rounded-lg transition hover:bg-gray-900 w-[100%]">
                <FaPlus className="mr-3 w-[20px] h-[20px] text-[#B83737]" />
                <span className="text-[16px] font-semibold text-[#B83737]">
                  Добавить задачу
                </span>
              </button>
              <NavLink
                to="/incoming"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#742020a8] text-[#B83737]"
                      : "text-white hover:bg-gray-700"
                  }`
                }
              >
                <FaInbox className="mr-3 w-[20px] h-[20px]" />
                <span className="text-[16px] font-semibold">Входящие</span>
              </NavLink>
              <NavLink
                to="/today"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#742020a8] text-[#B83737]"
                      : "text-white hover:bg-gray-700"
                  }`
                }
              >
                <MdToday className="mr-3 w-[20px] h-[20px]" />
                <span className="text-[16px] font-semibold">Сегодня</span>
              </NavLink>
              <NavLink
                to="/upcoming"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#742020a8] text-[#B83737]"
                      : "text-white hover:bg-gray-700"
                  }`
                }
              >
                <FaCalendarAlt className="mr-3 w-[20px] h-[20px]" />
                <span className="text-[16px] font-semibold">Предстоящие</span>
              </NavLink>
              <NavLink
                to="/completed"
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-[#742020a8] text-[#B83737]"
                      : "text-white hover:bg-gray-700"
                  }`
                }
              >
                <MdDoneAll className="mr-3 w-[20px] h-[20px]" />
                <span className="text-[16px] font-semibold">Выполенные</span>
              </NavLink>
            </div>
          </div>
          <div className="mt-auto ">
            <button className="flex items-center px-3 py-2 rounded-lg transition text-white hover:bg-gray-700 w-[100%]">
              <IoSettings className="mr-3 w-[20px] h-[20px]" />
              <span className="text-[16px] font-semibold">Настройки</span>
            </button>
            <button className="flex items-center px-3 py-2 rounded-lg transition text-white hover:bg-gray-700 w-[100%]">
              <GrSupport className="mr-3 w-[20px] h-[20px]" />
              <span className="text-[16px] font-semibold">Поддержка</span>
            </button>
            <button className="flex items-center px-3 py-2 rounded-lg transition text-white hover:bg-gray-700 w-[100%]">
              <IoLogOut className="mr-3 w-[25px] h-[25px]" />
              <span className="text-[16px] font-semibold">Выйти</span>
            </button>
          </div>
        </nav>
      </aside>
    </div>
  );
};
