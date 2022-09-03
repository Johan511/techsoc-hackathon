import { Box, Flex, Link, List, ListItem } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-location";

export default function AppLayout() {
  return (
    <Flex direction={"column"} w="full" h="100vh">
      <Box p="4" bg="blue.600" color={"white"} fontSize="24">
        <nav
          style={{
            maxWidth: "600px",
            margin: "auto",
          }}
        >
          <List
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems="center"
          >
            <ListItem>
              <Link href="/app">
                <i className="bx bxs-home"></i>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/home"
                style={{
                  textDecoration: "none",
                }}
              >
                <strong> Budget Splitter </strong>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/me">
                <i className="bx bxs-user"></i>
              </Link>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Box h="100%">
        <Outlet></Outlet>
      </Box>
    </Flex>
  );
}
