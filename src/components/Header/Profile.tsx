import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text color="cyan.500" fontSize="large">Ramon Pereira</Text>
          <Text color="cyan.700" fontSize="small">ramone.techie@gmail.com</Text>
        </Box>
      )}
      <Avatar
        size="md"
        // mr="4" add this on mobile screen 
        name="Ramon Pereira"
        src="https://github.com/RamonPereira88.png"
      />
    </Flex>
  );
}
