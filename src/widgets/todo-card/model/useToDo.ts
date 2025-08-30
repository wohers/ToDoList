import { useQuery } from "@tanstack/react-query";
import { todoApi } from "../../../shared/api/todo/todo.api";
import dayjs from "dayjs";

export const isToday = (dateString: string | Date | null) => {
  if (!dateString) return false;
  return dayjs(dateString).isSame(dayjs(), "day");
};

export const isFuture = (dateString: string | Date | null) => {
  if (!dateString) return false;
  return dayjs(dateString).isAfter(dayjs(), "day");
};

export const isOverdue = (dateString: string | Date | null) => {
  if (!dateString) return false;
  return dayjs(dateString).isBefore(dayjs(), "day");
};

// получение всех задач
export const useToDo = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => todoApi.getToDo(),
    queryKey: ["todos"],
  });

  return { data, isLoading, error };
};

// получение сегодняшних задач
export const useTodayTodos = () => {
  const { data, ...rest } = useToDo();

  const todayTodos =
    data?.data?.filter((todo) => {
      return isToday(todo.date_of_completion) && !todo.date_of_end;
    }) || [];

  return { data: todayTodos, ...rest };
};

// получение завершенных задач
export const useCompletedToDos = () => {
  const { data, ...rest } = useToDo();

  const completedTodos =
    data?.data?.filter((todo) => {
      return todo.date_of_completion !== null;
    }) || [];

  return { data: completedTodos, ...rest };
};

// получение предстоящих задач
export const useFutureToDos = () => {
  const { data, ...rest } = useToDo();

  const futureTodos =
    data?.data?.filter((todo) => {
      return isFuture(todo.date_of_completion) && !todo.date_of_end; // Будущие и не завершенные
    }) || [];

  return { data: futureTodos, ...rest };
};

// получение просроченныйх задач
export const useOverdueToDos = () => {
  const { data, ...rest } = useToDo();
  const overdueTodos = data?.data.filter((todo) => {
    return isOverdue(todo.date_of_completion) && !todo.date_of_end;
  });

  return { data: overdueTodos, ...rest };
};
