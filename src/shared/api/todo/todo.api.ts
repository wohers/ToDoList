import { baseAxios } from "../client";
import type { IToDoResponse } from "./types";

export const todoApi = {
  getToDo: (): Promise<IToDoResponse> => {
    return baseAxios("todos", "GET", null, true);
  },
};
