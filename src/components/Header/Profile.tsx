import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text color="cyan.500" fontSize="large">
          Ramon Pereira
        </Text>
        <Text color="cyan.700" fontSize="small">
          ramone.techie@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Ramon Pereira"
        src="https://github.com/RamonPereira88.png"
      />
    </Flex>
  );
}
