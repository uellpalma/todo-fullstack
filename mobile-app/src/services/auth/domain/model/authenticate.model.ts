export type LoginParams = {
  email: string;
  password: string;
};

export type RegisterParams = LoginParams & {
  name: string;
};
export type ForgotPassParams = {
  email: string;
};

export type AuthenticateResponse = {
  token: string;
};
