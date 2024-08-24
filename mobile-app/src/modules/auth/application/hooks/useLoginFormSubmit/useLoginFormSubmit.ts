import { useAuthenticate, type LoginParams } from "@/src/services/auth";
import { useCallback, useMemo } from "react";

export const useLoginFormSubmit = () => {
  const {
    isPending: isPendingLogin,
    isError: isLoginError,
    mutate: loginRequest,
  } = useAuthenticate();

  const onSubmit = useCallback(
    (values: LoginParams) => {
      loginRequest(values, {
        onError: () => {
          alert("Erro ao fazer login, cheque suas credenciais.");
        },
        onSuccess: (data) => {},
      });
    },
    [loginRequest]
  );

  const payload = useMemo(
    () => ({
      isLoginError,
      isPendingLogin,
      onSubmit,
    }),
    [isLoginError, isPendingLogin, onSubmit]
  );

  return payload;
};
