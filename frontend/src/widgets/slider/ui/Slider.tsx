import { NavLink } from "react-router-dom";
import { MdToday, MdDoneAll } from "react-icons/md";
import { FaUser, FaInbox, FaCalendarAlt, FaPlus } from "react-icons/fa";
import { IoSettings, IoLogOut } from "react-icons/io5";
import { GrSupport } from "react-icons/gr";

export const Slider = () => {
  const userStorage = localStorage.getItem('user');
  const user = userStorage ? JSON.parse(userStorage) : null;

  return (
    <div className="fixed left-0 top-0 h-screen w-[80px] md:w-[280px] bg-[#3A3A3A] shadow-lg p-3 md:p-5 flex flex-col transform transition-all duration-500 ease-out z-50">
      <aside className="flex-1">
        <nav className="flex flex-col h-full">
          <div>
            {/* User Info */}
            <div className="flex gap-[10px] mb-2.5 border-b-2 border-gray-500 items-center justify-center md:justify-start pb-2.5 md:pl-3 transition-all duration-300 hover:border-[#B83737]">
              <FaUser className="w-[20px] h-[20px] transition-transform duration-300 hover:scale-110 shrink-0" />
              <span className="hidden md:block text-[16px] mt-1 transition-all duration-300 hover:text-[#B83737] truncate">
                {user ? user['login'] : 'Гость'}
              </span>
            </div>

            {/* Main Navigation */}
            <div className="space-y-2 mt-4">
              {/* Add Task Button */}
              <button className="flex items-center justify-center md:justify-start p-3 md:px-3 md:py-2 rounded-lg transition-all duration-300 hover:bg-gray-900 w-full hover:scale-105 group">
                <FaPlus className="md:mr-3 w-[20px] h-[20px] text-[#B83737] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-90 shrink-0" />
                <span className="hidden md:block text-[16px] font-semibold text-[#B83737] transition-all duration-300 group-hover:translate-x-1 whitespace-nowrap">
                  Добавить задачу
                </span>
              </button>

              {/* Incoming */}
              <NavLink
                to="/incoming"
                className={({ isActive }) =>
                  `flex items-center justify-center md:justify-start p-3 md:px-3 md:py-2 rounded-lg transition-all duration-300 ease-in-out group ${
                    isActive
                      ? "bg-[#742020a8] text-[#B83737] scale-105 shadow-lg border-l-4 border-[#B83737]"
                      : "text-white hover:bg-gray-700 hover:scale-105 border-l-4 border-transparent"
                  }`
                }
              >
                <FaInbox className="md:mr-3 w-[20px] h-[20px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 shrink-0" />
                <span className="hidden md:block text-[16px] font-semibold transition-all duration-300 group-hover:translate-x-1 whitespace-nowrap">
                  Входящие
                </span>
              </NavLink>

              {/* Today */}
              <NavLink
                to="/today"
                className={({ isActive }) =>
                  `flex items-center justify-center md:justify-start p-3 md:px-3 md:py-2 rounded-lg transition-all duration-300 ease-in-out group ${
                    isActive
                      ? "bg-[#742020a8] text-[#B83737] scale-105 shadow-lg border-l-4 border-[#B83737]"
                      : "text-white hover:bg-gray-700 hover:scale-105 border-l-4 border-transparent"
                  }`
                }
              >
                <MdToday className="md:mr-3 w-[20px] h-[20px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 shrink-0" />
                <span className="hidden md:block text-[16px] font-semibold transition-all duration-300 group-hover:translate-x-1 whitespace-nowrap">
                  Сегодня
                </span>
              </NavLink>

              {/* Upcoming */}
              <NavLink
                to="/upcoming"
                className={({ isActive }) =>
                  `flex items-center justify-center md:justify-start p-3 md:px-3 md:py-2 rounded-lg transition-all duration-300 ease-in-out group ${
                    isActive
                      ? "bg-[#742020a8] text-[#B83737] scale-105 shadow-lg border-l-4 border-[#B83737]"
                      : "text-white hover:bg-gray-700 hover:scale-105 border-l-4 border-transparent"
                  }`
                }
              >
                <FaCalendarAlt className="md:mr-3 w-[20px] h-[20px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 shrink-0" />
                <span className="hidden md:block text-[16px] font-semibold transition-all duration-300 group-hover:translate-x-1 whitespace-nowrap">
                  Предстоящие
                </span>
              </NavLink>

              {/* Completed */}
              <NavLink
                to="/completed"
                className={({ isActive }) =>
                  `flex items-center justify-center md:justify-start p-3 md:px-3 md:py-2 rounded-lg transition-all duration-300 ease-in-out group ${
                    isActive
                      ? "bg-[#742020a8] text-[#B83737] scale-105 shadow-lg border-l-4 border-[#B83737]"
                      : "text-white hover:bg-gray-700 hover:scale-105 border-l-4 border-transparent"
                  }`
                }
              >
                <MdDoneAll className="md:mr-3 w-[20px] h-[20px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 shrink-0" />
                <span className="hidden md:block text-[16px] font-semibold transition-all duration-300 group-hover:translate-x-1 whitespace-nowrap">
                  Выполненные
                </span>
              </NavLink>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-auto space-y-2">
            {/* Settings */}
            <button className="flex items-center justify-center md:justify-start p-3 md:px-3 md:py-2 rounded-lg transition-all duration-300 text-white hover:bg-gray-700 hover:scale-105 w-full group border-l-4 border-transparent hover:border-[#B83737]">
              <IoSettings className="md:mr-3 w-[20px] h-[20px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45 shrink-0" />
              <span className="hidden md:block text-[16px] font-semibold transition-all duration-300 group-hover:translate-x-1 whitespace-nowrap">
                Настройки
              </span>
            </button>

            {/* Support */}
            <button className="flex items-center justify-center md:justify-start p-3 md:px-3 md:py-2 rounded-lg transition-all duration-300 text-white hover:bg-gray-700 hover:scale-105 w-full group border-l-4 border-transparent hover:border-[#B83737]">
              <GrSupport className="md:mr-3 w-[20px] h-[20px] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12 shrink-0" />
              <span className="hidden md:block text-[16px] font-semibold transition-all duration-300 group-hover:translate-x-1 whitespace-nowrap">
                Поддержка
              </span>
            </button>

            {/* Logout */}
            <button className="flex items-center justify-center md:justify-start p-3 md:px-3 md:py-2 rounded-lg transition-all duration-300 text-white hover:bg-gray-700 hover:scale-105 w-full group border-l-4 border-transparent hover:border-red-500">
              <IoLogOut className="md:mr-3 w-[25px] h-[25px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 shrink-0" />
              <span className="hidden md:block text-[16px] font-semibold transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-400 whitespace-nowrap">
                Выйти
              </span>
            </button>
          </div>
        </nav>
      </aside>
    </div>
  );
};