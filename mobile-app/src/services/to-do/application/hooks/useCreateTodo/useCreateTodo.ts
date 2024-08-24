import { useMutation } from "@tanstack/react-query";

import { normalizeResponse } from "../../../../httpClient";
import { CreateTodoParams, TodosResource } from "../../../domain";

export const useCreateTodo = () => {
  const request = async (params: CreateTodoParams) => {
    const response = await new TodosResource().create(params);

    return normalizeResponse(response);
  };

  return useMutation({
    mutationFn: request,
  });
};
