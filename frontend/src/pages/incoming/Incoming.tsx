import { useIncomingToDos } from "../../widgets/todo-card/model/useToDo";
import ToDoCard from "../../widgets/todo-card/ui/ToDoCard";

export const Incoming = () => {
  const { data } = useIncomingToDos();

  return (
    <div>
      <span>Incoming</span>
      {data?.map((todo) => (
        <ToDoCard todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
