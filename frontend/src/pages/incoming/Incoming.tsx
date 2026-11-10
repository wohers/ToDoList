import { useToDo } from "../../widgets/todo-card/model/useToDo";
import ToDoCard from "../../widgets/todo-card/ui/ToDoCard";

export const Incoming = () => {
  const { data: response } = useToDo();
  const todos = response?.data || [];

  return (
    <div className="p-4 md:p-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-white">Все задачи</h1>
        <span className="text-xs md:text-sm text-gray-400">Всего: {todos.length}</span>
      </div>

      {todos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
          {todos.map((todo) => (
            <ToDoCard todo={todo} key={todo.id} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 md:py-16 text-sm md:text-base text-gray-400">
          Нет задач
        </div>
      )}
    </div>
  );
};