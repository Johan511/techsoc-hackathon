import { Avatar, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";

type SplitItemProps = {
  name: string;
  amount: number;
  onEdit?: () => void;
  onDelete?: () => void;
};

export default function SplitItem({ name, amount }: SplitItemProps) {
  return (
    <Flex bg="white" borderRadius="4" p="2" alignItems={"center"} gap="2">
      <Avatar size={"xs"} name={name}></Avatar>
      <Text fontSize={"20"} fontWeight="medium">
        {name}
      </Text>
      <Text>&#8377; {amount}</Text>
      <ButtonGroup ml="auto">
        <Button fontSize={"xl"} h={"unset"} minW={"unset"} p={1}>
          <i className="bx bxs-edit"></i>
        </Button>
        <Button fontSize={"xl"} h={"unset"} minW={"unset"} p={1}>
          <i className="bx bxs-trash"></i>
        </Button>
      </ButtonGroup>
    </Flex>
  );
}
