import { Box, Heading, Text } from "@chakra-ui/react";

export default function NotFoundPage() {
  return (
    <Box
      bg="gray.600"
      w="100vw"
      h="100vh"
      display="grid"
      placeContent={"center"}
    >
      <Box bg="gray.100" p="8" borderRadius={"xl"}>
        <Heading>Error ! Not Found</Heading>
        <Text>The page you have equested does not exist</Text>
      </Box>
    </Box>
  );
}
