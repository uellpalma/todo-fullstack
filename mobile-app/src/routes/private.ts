import { TodoStack, type TodoStackParamList } from "../modules/todos/routes";
import {
  ProfileStack,
  type ProfileStackParamList,
} from "../modules/user/routes";
import { StackRouteConfig } from "./types";

export type PrivateStackParamList = TodoStackParamList & ProfileStackParamList;

type PrivateStackRouteConfig = StackRouteConfig<PrivateStackParamList>;

const PrivateStack = {
  ...TodoStack,
  ...ProfileStack,
} as Record<keyof PrivateStackParamList, PrivateStackRouteConfig>;

export default PrivateStack;
