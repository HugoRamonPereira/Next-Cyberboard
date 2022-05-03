import { Flex, Input, Text, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import { BsBell } from "react-icons/bs";
import { IoPersonAddOutline } from "react-icons/io5";

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
         <Text
            fontSize="3xl"
            fontWeight="normal"
            letterSpacing="wide"
            w="64"
            color="cyan.500"
         >
            Cyberboard
         </Text>
         <Flex
            as="label"
            flex="1"
            py="4"
            px="8"
            ml="6"
            maxWidth={400}
            alignSelf="center"
            color="cyan.500"
            position="relative"
            bg="gray.800"
            borderRadius="full"
         >
            <Input
               color="cyan.500"
               variant="unstyled"
               px="4"
               mr="4"
               placeholder="Search our cyberboard"
               _placeholder={{ color: "cyan.800" }}
            />
            <Icon as={IoIosSearch} fontSize="20"/>
         </Flex>

         <Flex
            align="center"
            ml="auto"
         >
            <HStack
               spacing="8"
               mx="8"
               pr="8"
               py="1"
               color="cyan.500"
               borderRightWidth={1}
               borderColor="cyan.500"
            >
               <Icon as={BsBell} fontSize="20"/>
               <Icon as={IoPersonAddOutline} fontSize="20"/>
            </HStack>

            <Flex align="center">
               <Box mr="4" textAlign="right">
                  <Text color="cyan.500" fontSize="large">Ramon Pereira</Text>
                  <Text color="cyan.700" fontSize="small">ramone.techie@gmail.com</Text>
               </Box>
               <Avatar size="md" name="Ramon Pereira" src="https://github.com/RamonPereira88.png" />
            </Flex>
         </Flex>
      </Flex>
   )
} 