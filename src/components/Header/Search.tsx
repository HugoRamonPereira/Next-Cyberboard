import { Flex, Input, Icon } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";

export function Search() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="cyan.500"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="cyan.500"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Search our cyberboard"
        _placeholder={{ color: "cyan.800" }}
      />
      <Icon as={IoIosSearch} fontSize="20" />
    </Flex>
  );
}
