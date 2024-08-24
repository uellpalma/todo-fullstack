import React from "react";

export type UseBottomSheetTypes<T> = {
  ContentComponent: React.ElementType;
  initialData: T;
};
