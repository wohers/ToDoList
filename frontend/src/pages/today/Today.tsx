import { useOverdueToDos, useTodayTodos } from "../../widgets/todo-card/model/useToDo";
import ToDoCard from "../../widgets/todo-card/ui/ToDoCard";
import { MdWarning } from "react-icons/md";

export const Today = () => {
  const { data: todayTodos = [] } = useTodayTodos();
  const { data: overdueToDos = [] } = useOverdueToDos();

  const hasOverdue = overdueToDos.length > 0;
  const hasToday = todayTodos.length > 0;

  return (
    <div className="p-4 md:p-6">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0 mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-white">Задачи на сегодня</h1>
        <span className="text-xs md:text-sm text-gray-400">
          Сегодня: {todayTodos.length} {hasOverdue ? `| Просрочено: ${overdueToDos.length}` : ''}
        </span>
      </div>

      {hasOverdue && (
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-2 mb-3 md:mb-4 text-red-400 font-semibold text-base md:text-lg">
            <MdWarning className="w-5 h-5 shrink-0" />
            <span>Просроченные задачи ({overdueToDos.length})</span>
          </div>
          {/* Сетка уже адаптивна, но мы добавили gap-4 для мобилок и gap-6 для экранов больше */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
            {overdueToDos.map((todo) => (
              <ToDoCard todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
      )}

      {hasToday ? (
        <div>
          {hasOverdue && (
            <h2 className="text-base md:text-lg font-semibold text-white mb-3 md:mb-4">
              Актуальные на сегодня
            </h2>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-start">
            {todayTodos.map((todo) => (
              <ToDoCard todo={todo} key={todo.id} />
            ))}
          </div>
        </div>
      ) : (
        !hasOverdue && (
          <div className="text-center py-10 md:py-16 text-gray-400 text-sm md:text-base">
            На сегодня нет задач
          </div>
        )
      )}
    </div>
  );
};