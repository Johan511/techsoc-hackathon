import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";

type EditSplitFormProps = {
  onCancel: () => void;
};

export default function EditSplitForm({ onCancel }: EditSplitFormProps) {
  return (
    <form>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel htmlFor={"name"}>Friend Name</FormLabel>
          <Select>
            {
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            }
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor={"name"}>Budget Name</FormLabel>
          <Input
            id={"name"}
            onChange={(e) => {
              console.log("e", e.target.value, "b");
              // if (e.target.value === "") {
              //   setIsNameEmpty(true);
              // } else {
              //   setIsNameEmpty(false);
              // }
            }}
            // value=""
          />
        </FormControl>
        <ButtonGroup display="flex" justifyContent="flex-end">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button colorScheme="teal">Create</Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
}
