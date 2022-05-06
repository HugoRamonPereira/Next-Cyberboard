import { Stack } from "@chakra-ui/react";
import {
  IoPodiumOutline,
  IoPeopleOutline,
  IoDocumentTextOutline,
  IoSpeedometerOutline,
} from "react-icons/io5";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GENERAL">
        <NavLink icon={IoPodiumOutline}>Dashboard</NavLink>
        <NavLink icon={IoPeopleOutline}>Users</NavLink>
      </NavSection>
      <NavSection title="AUTOMATION">
        <NavLink icon={IoDocumentTextOutline}>Forms</NavLink>
        <NavLink icon={IoSpeedometerOutline}>Automation</NavLink>
      </NavSection>
    </Stack>
  );
}
