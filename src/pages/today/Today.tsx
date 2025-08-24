import { useTodayTodos } from "../../widgets/todo-card/model/useToDo";
import ToDoCard from "../../widgets/todo-card/ui/ToDoCard";

export const Today = () => {
  const { data } = useTodayTodos();

  return (
    <div className="p-20">
      <div className="flex items-center justify-start mb-12">
        <span className="font-semibold text-3xl">Задачи на Сегодня</span>
      </div>
      {data.length
        ? data?.map((todo) => <ToDoCard todo={todo} key={todo.id} />)
        : "На сегодня нет задач"}
    </div>
  );
};
