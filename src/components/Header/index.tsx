import { Flex } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { Notifications } from "./Notifications";
import { Search } from "./Search";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <Search />

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile />
      </Flex>
    </Flex>
  );
}
