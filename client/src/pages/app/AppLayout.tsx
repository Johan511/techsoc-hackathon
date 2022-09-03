import { Box, Flex, List, ListItem } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-location";

export default function AppLayout() {
  return (
    <Flex direction={{ base: "column", md: "row" }} w="full">
      <Box>
        <nav>
          <List>
            <ListItem>App</ListItem>
          </List>
        </nav>
      </Box>
      <Box>
        <Outlet></Outlet>
      </Box>
    </Flex>
  );
}
