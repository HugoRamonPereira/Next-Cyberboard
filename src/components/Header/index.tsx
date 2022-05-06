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
  const isSmallScreen = useBreakpointValue({ base: false, lg: true });

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
          color="cyan.500"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}
      <Logo />
      <Search widenInput={isSmallScreen} />

      <Flex align="center" ml="auto">
        <Notifications />
        <Profile showProfileData={isLargeScreen} />
      </Flex>
    </Flex>
  );
}
