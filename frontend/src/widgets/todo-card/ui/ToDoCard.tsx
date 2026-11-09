import { MdModeEdit, MdDelete, MdPriorityHigh } from "react-icons/md";
import { FaRegCalendarAlt, FaCheckCircle, FaRegCircle } from "react-icons/fa";
import type { IToDo } from "../../../entities/todo/types";
import { isOverdue, isToday } from "../model/useToDo";
import dayjs from "dayjs";
import "dayjs/locale/ru";

dayjs.locale("ru");

interface ToDoCardProps {
  todo: IToDo;
  onEdit?: (todo: IToDo) => void;
  onDelete?: (id: number) => void;
  onToggle?: (todo: IToDo) => void;
}

const ToDoCard = ({ todo, onEdit, onDelete, onToggle }: ToDoCardProps) => {
  const overdue = isOverdue(todo.date_of_completion) && !todo.date_of_end;
  const today = isToday(todo.date_of_completion) && !todo.date_of_end;
  const isCompleted = Boolean(todo.date_of_end);

  return (
    <div
      className={`w-full bg-[#3A3A3A] border ${overdue ? "border-red-500/80 shadow-red-900/20" : "border-gray-600/60"} rounded-xl p-5 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#B83737] group`}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex items-start gap-3.5 flex-1 min-w-0">
          <button
            type="button"
            onClick={() => onToggle?.(todo)}
            className="mt-1 text-gray-400 hover:text-[#B83737] transition-colors focus:outline-none cursor-pointer"
            title={isCompleted ? "Отметить как невыполненную" : "Выполнить"}
          >
            {isCompleted ? (
              <FaCheckCircle className="w-5 h-5 text-emerald-500" />
            ) : (
              <FaRegCircle className="w-5 h-5 hover:scale-110 transition-transform" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3
                className={`text-base font-semibold tracking-wide text-white truncate ${isCompleted ? "line-through text-gray-400" : ""}`}
              >
                {todo.title}
              </h3>
              {todo.priority && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-[#B83737]/20 text-[#B83737] border border-[#B83737]/40">
                  <MdPriorityHigh className="w-3.5 h-3.5" />
                  Важно
                </span>
              )}
            </div>

            {todo.description && (
              <p className="mt-1 text-sm text-gray-300 line-clamp-2 leading-relaxed">
                {todo.description}
              </p>
            )}

            {todo.date_of_completion && (
              <div className="mt-3 flex items-center gap-2 text-xs">
                <span
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md font-medium ${
                    overdue
                      ? "bg-red-500/20 text-red-400 border border-red-500/30"
                      : today
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-gray-700/60 text-gray-300 border border-gray-600/50"
                  }`}
                >
                  <FaRegCalendarAlt className="w-3.5 h-3.5" />
                  {dayjs(todo.date_of_completion).format("D MMMM YYYY")}
                  {overdue && " (Просрочено)"}
                  {today && " (Сегодня)"}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={() => onEdit?.(todo)}
            className="p-2 text-gray-300 hover:text-white hover:bg-[#742020a8] rounded-lg transition-all duration-200 cursor-pointer"
            title="Редактировать"
          >
            <MdModeEdit className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => onDelete?.(todo.id)}
            className="p-2 text-gray-300 hover:text-red-400 hover:bg-[#742020a8] rounded-lg transition-all duration-200 cursor-pointer"
            title="Удалить"
          >
            <MdDelete className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoCard;
