import {
  EventMapBase,
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from "@react-navigation/native";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { PrivateStackParamList } from "./private";
import { PublicStackParamList } from "./public";

export type RootStackParamList = PrivateStackParamList & PublicStackParamList;

export type StackRouteConfig<T extends ParamListBase> = Omit<
  RouteConfig<
    T,
    keyof T,
    StackNavigationState<T>,
    NativeStackNavigationOptions,
    EventMapBase
  >,
  "name"
>;
