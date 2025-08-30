import { MdModeEdit, MdDelete } from "react-icons/md";
import type { IToDo } from "../../../entities/todo/types";
import { isOverdue } from "../model/useToDo";
import dayjs from "dayjs";
import 'dayjs/locale/ru'

dayjs.locale('ru')

const ToDoCard = ({ todo }: { todo: IToDo }) => {
  return (
    <div className="flex justify-center items-center mb-4">
      <div className="w-[680px]">
        <div className="flex justify-between items-center border-b border-solid p-5">
          <div className="flex items-center">
            <input type="checkbox" />
            <span className="ml-2.5">{todo.title}</span>
          </div>
          <div className="flex items-center">
            <button className="p-1 hover:bg-[#742020a8] rounded">
              <MdModeEdit />
            </button>
            <button className="p-1 hover:bg-[#742020a8] rounded ml-2">
              <MdDelete />
            </button>
          </div>
        </div>
        {isOverdue(todo.date_of_completion) && (
          <div className="px-5 pb-2">
            {isOverdue(todo.date_of_completion) ? (
              <span className="text-xs text-red-500">
                {dayjs(todo.date_of_completion).format('D MMMM YYYY')}
              </span>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ToDoCard;
