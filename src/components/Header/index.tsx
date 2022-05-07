import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { Notifications } from "./Notifications";
import { Search } from "./Search";
import { Logo } from "./Logo";
import { useSidebarDrawer } from "../../contexts/SidebarNavContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

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
      {!isLargeScreen && (
        <IconButton 
          aria-label="Open mobile sidebar"
          icon={<Icon as={RiMenuLine} />}
          color="cyan.500"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          pt="1.5" /* To align the burger icon to the middle, just like the logo */
        >

        </IconButton>
      )}
      <Logo />
      { isLargeScreen && <Search />}

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isLargeScreen} />
      </Flex>
    </Flex>
  );
}
