import { Box, Button, Divider, Flex, FormLabel, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import { RiSave3Line } from "react-icons/ri"
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
   return (
      <Box>
         <Header />
         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />

            <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
              <Heading size="lg" fontWeight="normal" color="cyan.500">Create user</Heading>
              <Divider my="6" borderColor="cyan.500" />
              <VStack spacing="8" borderColor="cyan.500">
                  <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                     <Box>
                        <FormLabel htmlFor="name" color="cyan.400">Name</FormLabel>
                        <Input name="name" />
                     </Box>
                     <Box>
                        <FormLabel htmlFor="email" color="cyan.400">E-mail</FormLabel>
                        <Input name="email" type="email"/>
                     </Box>             
                  </SimpleGrid>
                  <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                     <Box>
                        <FormLabel htmlFor="name" color="cyan.400">Password</FormLabel>
                        <Input name="password" type="password"/>
                     </Box>
                     <Box>
                        <FormLabel htmlFor="name" color="cyan.400">Password Confirmation</FormLabel>
                        <Input name="password_confirmation" type="password"/>
                     </Box>
                  </SimpleGrid>
              </VStack>
              <Flex mt="8" justify="flex-end">
                 <HStack spacing="6">
                    <Button colorScheme="whiteAlpha">Cancel</Button>
                    <Button colorScheme="cyan" color="white" rightIcon={ <Icon as={RiSave3Line} fontSize="20" /> }> Save </Button> 
                 </HStack>
              </Flex>
            </Box>
         </Flex>
      </Box>
   )
}