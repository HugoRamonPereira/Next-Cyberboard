import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { IoPodiumOutline, IoPeopleOutline, IoSpeedometerOutline, IoDocumentTextOutline } from "react-icons/io5";

export function Sidebar() {
   return (
      <Box as="aside" w="64" mr="8">
         <Stack spacing="12" align="flex-start">
            <Box>
               <Text fontWeight="medium" color="cyan.500" fontSize="lg">GENERAL</Text>
               <Stack spacing="4" mt="8" align="stretch">
                  <Link display="flex" alignItems="center" color="cyan.500">
                     <Icon as={IoPodiumOutline} fontSize="22" />
                     <Text ml="4" fontWeight="normal">Dashboard</Text>
                  </Link>
                  <Link display="flex" alignItems="center" color="cyan.500">
                     <Icon as={IoPeopleOutline} fontSize="22" />
                     <Text ml="4" fontWeight="normal">Users</Text>
                  </Link>
               </Stack>
            </Box>
            <Box>
               <Text fontWeight="medium" color="cyan.500" fontSize="lg">AUTOMATION</Text>
               <Stack spacing="4" mt="8" align="stretch">
                  <Link display="flex" alignItems="center" color="cyan.500">
                     <Icon as={IoDocumentTextOutline} fontSize="22" />
                     <Text ml="4" fontWeight="normal">Forms</Text>
                  </Link>
                  <Link display="flex" alignItems="center" color="cyan.500">
                     <Icon as={IoSpeedometerOutline} fontSize="22" />
                     <Text ml="4" fontWeight="normal">Automation</Text>
                  </Link>
               </Stack>
            </Box>
         </Stack>
      </Box>
   )
}