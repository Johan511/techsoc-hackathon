import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

type NewBudgetFormProps = {
  onCancel: () => void;
};

export default function NewBudgetForm({ onCancel }: NewBudgetFormProps) {
  const [isNameEmpty, setIsNameEmpty] = useState(true);
  return (
    <form>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel htmlFor={"name"}>Budget Name</FormLabel>
          <Input
            id={"name"}
            onChange={(e) => {
              console.log("e", e.target.value, "b");
              if (e.target.value === "") {
                setIsNameEmpty(true);
              } else {
                setIsNameEmpty(false);
              }
            }}
            // value=""
          />
        </FormControl>
        <ButtonGroup display="flex" justifyContent="flex-end">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button isDisabled={isNameEmpty} colorScheme="teal">
            Create
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
}
