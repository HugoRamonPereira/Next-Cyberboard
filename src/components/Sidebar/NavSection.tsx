import { Box, Stack, Icon, Text, Link } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IoPodiumOutline, IoPeopleOutline } from "react-icons/io5";

interface NavSectionProps {
   title: string;
   children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="medium" color="cyan.500" fontSize="lg">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
         {children}
      </Stack>
    </Box>
  );
}
