import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]} /* the 2xl is for mobile screens n the 3xl is for aall sizes after mobile */
      fontWeight="normal"
      letterSpacing="wide"
      w="64"
      color="cyan.500"
    >
      Cyberboard
    </Text>
  );
}
