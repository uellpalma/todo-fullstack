import { useCreateTodo } from "@/src/services/to-do/application/hooks/useCreateTodo/useCreateTodo";
import { useCallback, useMemo } from "react";
import { CreateTodoFormValues } from "../../../presentation/validations";

export const useCreateTodoFormSubmit = () => {
  const {
    isPending: isPendingCreateTodo,
    isError: isCreateTodoError,
    mutate: createTodoRequest,
  } = useCreateTodo();

  const onSubmit = useCallback(
    (values: CreateTodoFormValues) => {
      createTodoRequest(values, {
        onError: () => {
          alert("Erro ao criar to-do.");
        },
        onSuccess: (data) => {},
      });
    },
    [createTodoRequest]
  );

  const payload = useMemo(
    () => ({
      isCreateTodoError,
      isPendingCreateTodo,
      onSubmit,
    }),
    [isCreateTodoError, isPendingCreateTodo, onSubmit]
  );

  return payload;
};
