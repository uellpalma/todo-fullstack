import { Badge, BadgeText } from "@/components/ui/badge";
import { HStack } from "@/components/ui/hstack";

export const TodoFilters = () => {
  return (
    <HStack space="md" className="mt-10">
      {["Pendente", "Em andamento", "Concluído"].map((status) => (
        <Badge
          size="lg"
          variant="outline"
          action="muted"
          key={status}
          className="rounded-lg"
        >
          <BadgeText>{status}</BadgeText>
        </Badge>
      ))}
    </HStack>
  );
};
