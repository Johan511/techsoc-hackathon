import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

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
          share: {
            type: "percentage",
            value: 50,
          },
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
          share: {
            type: "percentage",
            value: 50,
          },
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
          share: {
            type: "percentage",
            value: 50,
          },
        },
      ],
    },
  ];
  return (
    <Container maxW="lg" p="4" bg="gray.200">
      <Box p="1">
        <Heading>XYZ's Party</Heading>
        <time>02/09/2022</time>
      </Box>
      <Box>
        <Heading as="h3">
          Friends
          {/* <Sharers></Sharers> */}
        </Heading>
        <List></List>
      </Box>
      <Box padding={"2"}>
        <Heading as="h3">Items</Heading>
        <List gap={"1"}>
          {subBudgets.map(({ price, name, description, people }) => (
            <ListItem w="full" mt="2" bg="gray.100" p="2">
              <Flex gap="4" alignItems="center">
                <Text fontSize={24}>{price}</Text>

                <Box>
                  <Text>{name}</Text>
                  <Text fontSize={"small"}>{description}</Text>
                </Box>
              </Flex>

              <Box>
                <List gap={"1"}>
                  {people.map(() => (
                    <Box></Box>
                  ))}
                </List>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};
export default BudgetNewpage;
