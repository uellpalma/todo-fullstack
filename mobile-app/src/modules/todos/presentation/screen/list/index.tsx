import React, { useCallback } from "react";

import { ScreenBase, useOptionsScreen } from "@/src/modules/common";
import { Fab, FabIcon } from "@/components/ui/fab";
import { AddIcon } from "@/components/ui/icon";
import { Box } from "@/components/ui/box";
import { useNavigation } from "@react-navigation/native";
import { HeaderUser } from "../../components/HeaderUser";
import { useTodoBottomSheets } from "../../../application/hooks";
import { TodoFilters, TodosList } from "../../components";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/routes/types";

export const TodoListScreen = () => {
  useOptionsScreen({
    headerShown: false,
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { openTodoFormBottomSheet, renderTodoBottomSheets } =
    useTodoBottomSheets();

  const handleNavigateProfile = useCallback(() => {
    navigation.navigate("Profile");
  }, []);

  return (
    <ScreenBase>
      <HeaderUser userName="Jane Doh" onPressProfile={handleNavigateProfile} />

      <TodoFilters />

      <TodosList />

      <Box className="w-full bg-red px-10">
        <Fab
          size="lg"
          placement="bottom center"
          onPress={openTodoFormBottomSheet}
        >
          <FabIcon as={AddIcon} size="xl" />
        </Fab>
      </Box>

      {renderTodoBottomSheets()}
    </ScreenBase>
  );
};
