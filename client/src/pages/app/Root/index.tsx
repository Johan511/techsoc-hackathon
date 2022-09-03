import {
  Box,
  Button,
  Heading,
  Link,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";

import FocusLock from "react-focus-lock";
import NewBudgetForm from "./NewBudgetForm";
import AddFriendForm from "./AddFriendForm";

export default function AppRootPage() {
  const BudgetPopup = useDisclosure();
  const AddFriendPopup = useDisclosure();
  const ManagePopup = useDisclosure();
  return (
    <Box
      maxW="600px"
      p="4"
      m="auto"
      display={"grid"}
      placeItems="center"
      placeContent={"center"}
      gap="8"
      h="100%"
      fontSize={"3xl"}

      // fontSize={"3xl"}
      // p="34"
    >
      <Box>
        <Heading fontSize={"5xl"} textAlign={"center"}>
          {" "}
          Welcome user name !
        </Heading>
      </Box>

      <Box>
        <Popover
          isOpen={BudgetPopup.isOpen}
          // initialFocusRef={firstFieldRef}
          onOpen={BudgetPopup.onOpen}
          onClose={BudgetPopup.onClose}
          // placement='right'
          closeOnBlur={true}
        >
          <PopoverTrigger>
            <Button
              // display="inline-block"
              fontSize={"2xl"}
              py="8"
              px="12"
              // textDecoration="none"
              // href="/app/new-budget"
            >
              Create new budget
            </Button>
          </PopoverTrigger>
          <PopoverContent p={5}>
            <FocusLock returnFocus persistentFocus={false}>
              {/* <PopoverArrow /> */}
              <PopoverCloseButton />
              <NewBudgetForm onCancel={BudgetPopup.onClose}></NewBudgetForm>
              {/* <Form firstFieldRef={firstFieldRef} onCancel={onClose} /> */}
            </FocusLock>
          </PopoverContent>
        </Popover>
      </Box>
      <Box fontSize={"2xl"} bg="gray.200" borderRadius={"2xl"}>
        <Button
          fontSize={"2xl"}
          py="8"
          px="12"
          // textDecoration="none"
          // href="/app/budgets"
        >
          Manage Finances
        </Button>
      </Box>
      <Box fontSize={"2xl"} bg="gray.200" borderRadius={"2xl"}>
        <Popover
          isOpen={AddFriendPopup.isOpen}
          // initialFocusRef={firstFieldRef}
          onOpen={AddFriendPopup.onOpen}
          onClose={AddFriendPopup.onClose}
          // placement='right'
          closeOnBlur={true}
        >
          <PopoverTrigger>
            <Button
              fontSize={"2xl"}
              py="8"
              px="12"
              // textDecoration="none"
              // href="/app/add-friend"
            >
              Add Friends
            </Button>
          </PopoverTrigger>
          <PopoverContent p={5}>
            <FocusLock returnFocus persistentFocus={false}>
              {/* <PopoverArrow /> */}
              <PopoverCloseButton />
              <AddFriendForm onCancel={AddFriendPopup.onClose}></AddFriendForm>
              {/* <Form firstFieldRef={firstFieldRef} onCancel={onClose} /> */}
            </FocusLock>
          </PopoverContent>
        </Popover>
      </Box>
    </Box>
  );
}
