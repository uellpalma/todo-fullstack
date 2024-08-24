import { AuthStack, type AuthStackParamList } from "../modules/auth/routes";
import { StackRouteConfig } from "./types";

export type PublicStackParamList = AuthStackParamList;

type PublicStackRouteConfig = StackRouteConfig<PublicStackParamList>;

const PublicStack = {
  ...AuthStack,
} as Record<keyof PublicStackParamList, PublicStackRouteConfig>;

export default PublicStack;
