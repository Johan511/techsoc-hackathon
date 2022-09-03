import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import SplitItem from "./SplitItem";

// type Budget

const BudgetNewpage = () => {
  const friends = [
    {
      name: "John Doe",
    },
  ];
  const subBudgets = [
    {
      name: "Aloo Butter masala",
      price: 65,
      description: "too",
      people: [
        {
          name: "Madhav",
          photo: "",
          amount: 20,
        },
        {
          name: "Madhav",
          photo: "",
          amount: 20,
        },
        {
          name: "Madhav",
          photo: "",
          amount: 20,
        },
      ],
    },
    {
      name: "Aloo Butter masala",
      price: 65,
      description: "too",
      people: [
        {
          name: "Madhav",
          photo: "",
          amount: 20,
        },
      ],
    },
    {
      name: "Aloo Butter masala",
      price: 65,
      description: "too",
      people: [
        {
          name: "Madhav",
          photo: "",
          amount: 20,
        },
      ],
    },
  ];
  return (
    <Box w="100vw" p="4" bg="gray.100" textAlign={"center"} h="100%">
      <Box p="1">
        <Heading>XYZ's Party</Heading>
        <time>02/09/2022</time>
      </Box>
      {/* <Box>
        <Heading as="h3">
          Friends
        </Heading>
        <List></List>
      </Box> */}
      <Box padding={"2"} textAlign="left" maxW="600px" margin="auto">
        <Heading as="h3" fontSize={"2xl"}>
          Items
        </Heading>
        <List gap={"1"}>
          {subBudgets.map(({ price, name, description, people }) => (
            <ListItem w="full" mt="2" bg="white" p="6" borderRadius={"lg"}>
              <Flex gap="4" alignItems="center">
                <Text fontSize={24} fontWeight="bold">
                  &#8377; {price}
                </Text>

                <Box>
                  <Text fontSize={22} fontWeight={"medium"}>
                    {name}
                  </Text>
                  {/* <Text fontSize={"small"}>{description}</Text> */}
                </Box>
                <ButtonGroup ml="auto">
                  <Button fontSize={"xl"} h={"unset"} minW={"unset"} p={1}>
                    <i className="bx bxs-edit"></i>
                  </Button>
                  <Button fontSize={"xl"} h={"unset"} minW={"unset"} p={1}>
                    <i className="bx bxs-trash"></i>
                  </Button>
                </ButtonGroup>
              </Flex>

              <Box mt="3" bg="gray.100" p="4" borderRadius={"4"}>
                <Heading fontSize={"xl"}>Splits</Heading>
                <List gap={"1"} mt="4">
                  {people.map((s) => (
                    <SplitItem {...s}></SplitItem>
                  ))}
                </List>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
export default BudgetNewpage;
