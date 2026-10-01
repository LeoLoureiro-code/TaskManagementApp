import { Subtask } from "./Subtask";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
}