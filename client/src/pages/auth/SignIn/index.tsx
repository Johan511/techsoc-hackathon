import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link as ChakraLink,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Center,
} from "@chakra-ui/react";

// import {} from "@chakra-ui/icons"
// import { EmailIcon } from "@chakra-ui/icons";
import { Link } from "@tanstack/react-location";

const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Stack mb="2">
      <Flex
        minW={{ base: "90%", md: "468px" }}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        backgroundColor="whiteAlpha.900"
        boxShadow="md"
        borderRadius="xl"
        p="2rem"
        gap={"1em"}
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome Back</Heading>
        <form>
          <Stack spacing={4}>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="bx bxs-envelope"></i>}
                />
                <Input type="email" placeholder="email address" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <i className={`bx ${show ? "bxs-show" : "bxs-hide"}`}></i>
                  }
                />
                <Input type="password" placeholder="password" />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              colorScheme="teal"
              width="full"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Flex>
      <Center>
        <span>New to us?</span>
        <ChakraLink to="/auth/register" color="teal.500" as={Link}>
          {" "}
          Register
        </ChakraLink>
      </Center>
    </Stack>
  );
};

export default LoginPage;
