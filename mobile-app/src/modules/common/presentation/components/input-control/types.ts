import { Control, FieldValues, FormState, Path } from "react-hook-form";
import { TextInputProps } from "react-native";

export type InputControlProps<T extends FieldValues> = {
  control: Control<T>;
  formState: FormState<T>;
  label?: string;
  textArea?: boolean;
  name: Path<T>;
} & TextInputProps;
