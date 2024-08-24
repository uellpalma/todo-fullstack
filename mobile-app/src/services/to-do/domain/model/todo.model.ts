export enum TodoStatusEnum {
  TODO = "to-do",
  DOING = "doing",
  DONE = "done",
}

export type TodoData = {
  id: string;
  title: string;
  description: string;
  status: TodoStatusEnum;
  created_at: Date;
  updated_at: Date;
};

export type TodosListResponse = {
  todos: TodoData[];
};

export type CreateTodoParams = {
  title: string;
  description?: string;
};

export type UpdateTodoParams = Partial<CreateTodoParams>;
