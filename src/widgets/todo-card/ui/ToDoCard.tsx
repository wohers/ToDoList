import { MdModeEdit, MdDelete } from "react-icons/md";
import type { IToDo } from "../../../entities/todo/types";

const ToDoCard = ({ todo }: { todo: IToDo }) => {
  return (
    <div className="flex justify-center items-center mb-2.5">
      <div className="flex justify-between items-center border-b border-solid w-[680px] p-5">
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
    </div>
  );
};

export default ToDoCard;
