import { Box } from "@/components/ui/box";
import { HStack } from "@/components/ui/hstack";
import { Icon, TrashIcon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { ScrollView } from "react-native";

export const TodosList = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 15 }}>
      <Box className="bg-white p-2 rounded-lg">
        <HStack className="justify-between items-center">
          <HStack space="md">
            <Box className="w-7 h-7 border border-black rounded-lg"></Box>
            <Text size="lg">Tarefa 1</Text>
          </HStack>

          <Icon as={TrashIcon} size="md" className="text-red-600" />
        </HStack>
      </Box>
    </ScrollView>
  );
};
