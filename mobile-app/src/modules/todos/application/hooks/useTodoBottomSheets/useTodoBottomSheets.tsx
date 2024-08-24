import React from "react";
import { useBottomSheet } from "@/src/modules/common";
import { TodoForm } from "../../../presentation/components";

export const useTodoBottomSheets = () => {
  const {
    open: openTodoFormBottomSheet,
    close: closeTodoFormBottomSheet,
    component: todoFormBottomSheetComponent,
  } = useBottomSheet({
    ContentComponent: TodoForm,
    initialData: {},
  });

  const renderTodoBottomSheets = () => <>{todoFormBottomSheetComponent()}</>;

  return {
    openTodoFormBottomSheet,
    closeTodoFormBottomSheet,
    renderTodoBottomSheets,
  };
};
