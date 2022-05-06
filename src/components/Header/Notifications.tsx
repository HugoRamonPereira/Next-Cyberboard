import { HStack, Icon } from "@chakra-ui/react";
import { BsBell } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";

export function Notifications() {
  return (
    <HStack
      spacing="8"
      mx="8"
      pr="8"
      py="1"
      color="cyan.500"
      borderRightWidth={1}
      borderColor="cyan.500"
    >
      <Icon as={BsBell} fontSize="20" />
      <Icon as={IoPersonAddOutline} fontSize="20" />
    </HStack>
  );
}
