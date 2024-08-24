import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useLayoutEffect } from "react";

import { ArrowLeftIcon, Icon } from "@/components/ui/icon";
import { UseOptionsScreenProps } from "./useOptionsScreen.types";
import { Box } from "@/components/ui/box";
import { TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/src/routes/types";

export const useOptionsScreen = ({
  title,
  ...props
}: UseOptionsScreenProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
      ...props,
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <Box className="bg-white rounded-full flex justify-center items-center w-10 h-10">
            <Icon as={ArrowLeftIcon} size="lg" />
          </Box>
        </TouchableOpacity>
      ),
    });
  }, [navigation, props, title]);
};
