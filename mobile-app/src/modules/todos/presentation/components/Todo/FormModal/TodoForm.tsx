import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { InputControl } from "@/src/modules/common";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createTodoSchema } from "../../../validations";
import { useCreateTodoFormSubmit } from "../../../../application/hooks";

export const TodoForm = () => {
  const { isPendingCreateTodo, onSubmit } = useCreateTodoFormSubmit();

  const form = useForm({
    resolver: yupResolver(createTodoSchema),
  });

  return (
    <Box className="p-5">
      <Heading className="mb-5">Adicionar to-do</Heading>

      <VStack space="lg">
        <InputControl
          name="title"
          label="Título"
          control={form.control}
          formState={form.formState}
        />

        <InputControl
          name="description"
          label="Descrição"
          textArea
          control={form.control}
          formState={form.formState}
        />

        <Button
          size="xl"
          isDisabled={isPendingCreateTodo}
          variant="solid"
          action="primary"
          onPress={form.handleSubmit(onSubmit)}
        >
          <ButtonText>Criar</ButtonText>
        </Button>
      </VStack>
    </Box>
  );
};
