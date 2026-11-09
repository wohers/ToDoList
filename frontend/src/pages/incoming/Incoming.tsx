import { useToDo } from "../../widgets/todo-card/model/useToDo";
import ToDoCard from "../../widgets/todo-card/ui/ToDoCard";

export const Incoming = () => {
  const { data: response } = useToDo();
  const todos = response?.data || [];

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-white">Все задачи</h1>
        <span className="text-sm text-gray-400">Всего: {todos.length}</span>
      </div>
      {todos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {todos.map((todo) => (
            <ToDoCard todo={todo} key={todo.id} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400">Нет задач</div>
      )}
    </div>
  );
};
