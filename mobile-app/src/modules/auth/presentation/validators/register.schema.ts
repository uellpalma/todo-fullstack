import * as yup from "yup";

export const registerSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export type RegisterFormValues = yup.InferType<typeof registerSchema>;
