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

const RegisterPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Stack mb="2" w="full" backgroundColor="whiteAlpha.900" p="8">
      <Flex
        // minW={{ base: "90%", md: "468px" }}
        w="full"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        // boxShadow="md"
        borderRadius="xl"
        p="2rem"
        gap={"1em"}
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Join Us</Heading>
        <form>
          <Stack spacing={4}>
            <FormControl>
              <label>Name</label>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="bx bxs-user"></i>}
                />
                <Input placeholder="John Doe"></Input>
              </InputGroup>
            </FormControl>
            <FormControl>
              <label>Email</label>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<i className="bx bxs-envelope"></i>}
                />
                <Input type="email" placeholder="company@gmail.com" />
              </InputGroup>
            </FormControl>
            <FormControl>
              <label>Password</label>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <i className={`bx ${show ? "bxs-show" : "bxs-hide"}`}></i>
                  }
                />
                <Input type="password" placeholder="********" />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl>
              <label>Confirm Password</label>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={
                    <i className={`bx ${show ? "bxs-show" : "bxs-hide"}`}></i>
                  }
                />
                <Input type="password" placeholder="********" />
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
              Register
            </Button>
          </Stack>
        </form>
      </Flex>
      <Center>
        <span>Already Registered ?</span>
        <ChakraLink to="/auth/signin" color="teal.500" as={Link}>
          {" "}
          Sign In
        </ChakraLink>
      </Center>
    </Stack>
  );
};

export default RegisterPage;
