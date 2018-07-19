export interface Task {
  $key?: string;
  isDone: boolean;
  created: number;
  title: string;
}
