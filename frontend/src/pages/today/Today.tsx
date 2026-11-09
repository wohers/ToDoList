import { useOverdueToDos, useTodayTodos } from "../../widgets/todo-card/model/useToDo";
import ToDoCard from "../../widgets/todo-card/ui/ToDoCard";
import { MdWarning } from "react-icons/md";

export const Today = () => {
  const { data: todayTodos = [] } = useTodayTodos();
  const { data: overdueToDos = [] } = useOverdueToDos();

  const hasOverdue = overdueToDos.length > 0;
  const hasToday = todayTodos.length > 0;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">Задачи на сегодня</h1>
        <span className="text-sm text-gray-400">
          Сегодня: {todayTodos.length} {hasOverdue ? `| Просрочено: ${overdueToDos.length}` : ''}
        </span>
      </div>

      {hasOverdue && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4 text-red-400 font-semibold text-lg">
            <MdWarning className="w-5 h-5" />
            <span>Просроченные задачи ({overdueToDos.length})</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {overdueToDos.map((todo) => (
              <ToDoCard todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
      )}

      {hasToday ? (
        <div>
          {hasOverdue && <h2 className="text-lg font-semibold text-white mb-4">Актуальные на сегодня</h2>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {todayTodos.map((todo) => (
              <ToDoCard todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
      ) : (
        !hasOverdue && (
          <div className="text-center py-16 text-gray-400">
            На сегодня нет задач
          </div>
        )
      )}
    </div>
  );
};
