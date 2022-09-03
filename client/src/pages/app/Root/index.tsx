import { Box, Button, Heading, Link } from "@chakra-ui/react";

export default function AppRootPage() {
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
        <Heading fontSize={"4xl"} textAlign={"center"}>
          {" "}
          Welcome user name !
        </Heading>
      </Box>

      <Box fontSize={"2xl"} bg="gray.200" borderRadius={"2xl"}>
        <Link
          display="block"
          fontSize={"2xl"}
          py="4"
          px="8"
          textDecoration="none"
          href="newBudget"
        >
          Create new budget
        </Link>
      </Box>
      <Box fontSize={"2xl"} bg="gray.200" borderRadius={"2xl"}>
        <Link
          display={"block"}
          fontSize={"2xl"}
          py="4"
          px="8"
          textDecoration="none"
          href="budgets"
        >
          Manage Finances
        </Link>
      </Box>
    </Box>
  );
}
