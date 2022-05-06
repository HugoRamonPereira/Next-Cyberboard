import { Box, Stack } from "@chakra-ui/react";
import { IoPodiumOutline, IoPeopleOutline, IoSpeedometerOutline, IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GENERAl">
          <NavLink icon={IoPodiumOutline}>Dashboard</NavLink>
          <NavLink icon={IoPeopleOutline}>Users</NavLink>
        </NavSection>
        <NavSection title="AUTOMATION">
          <NavLink icon={IoDocumentTextOutline}>Forms</NavLink>
          <NavLink icon={IoSpeedometerOutline}>Automation</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
}
