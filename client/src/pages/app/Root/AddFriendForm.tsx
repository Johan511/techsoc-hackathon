import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
type AddFriendFormProps = {
  onCancel: () => void;
};
export default function AddFriendForm({ onCancel }: AddFriendFormProps) {
  const [isNameEmpty, setIsNameEmpty] = useState(true);

  return (
    <form>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel htmlFor={"name"}>Friend Name</FormLabel>
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
            Add
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
}
