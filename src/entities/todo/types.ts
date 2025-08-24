export interface IToDo {
  id: number;
  title: string;
  description: string;
  date_of_completion: Date;
  date_of_creation: Date;
  date_of_end: Date;
  priority: boolean;
  user: string;
}
