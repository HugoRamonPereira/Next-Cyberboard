import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Pagination } from "../../components/Pagination";
import Link from "next/link";

export default function UserList() {
   const isLargeScreen = useBreakpointValue({
      base: false,
      lg: true
   })
   return (
      <Box>
         <Header />
         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />

            <Box flex="1" borderRadius={8} bg="gray.800" p="8" >
               <Flex mb="8" justify="space-between" align="center">
                  <Heading size="lg" fontWeight="normal">Users</Heading>
                  <Link href="/users/create" passHref>
                     <Button 
                        as="a" 
                        size="sm" 
                        fontSize="lg" 
                        fontWeight="normal" 
                        cursor="pointer" 
                        color="white" 
                        colorScheme="cyan" 
                        leftIcon={<Icon as={RiAddLine} />}
                     >
                        Add new
                     </Button>
                  </Link>
               </Flex>

               <Table colorScheme="whiteAlpha">
                  <Thead>
                     <Tr>
                        <Th px={["4", "4", "6"]} color="cyan.800" width="8">
                           <Checkbox colorScheme="cyan" />
                        </Th>
                        <Th fontSize="small" color="cyan.700">User</Th>
                        { isLargeScreen && <Th fontSize="small" color="cyan.700">Signup Date</Th>}
                        <Th width="1"></Th>
                     </Tr>
                  </Thead>
                  <Tbody>
                     <Tr>
                        <Td px={["4", "4", "6"]}>
                           <Checkbox colorScheme="cyan" />
                        </Td>
                        <Td>
                           <Box>
                              <Text fontWeight="normal">Ramon Pereira</Text>
                              <Text fontSize="x-small" color="cyan.700">Ramone.techie@gmail.com</Text>
                           </Box>
                        </Td>
                        {isLargeScreen && <Td>06-05-2022</Td>} 
                        <Td>
                           { isLargeScreen ? 
                              <Button 
                              as="a" 
                              size="sm" 
                              fontSize="sm" 
                              fontWeight="medium" 
                              cursor="pointer" 
                              color="white" 
                              colorScheme="cyan" 
                              leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                           >
                              Edit
                           </Button>
                           : 
                           <Button 
                           as="a" 
                           w="0.5"
                           size="sm" 
                           fontSize="sm" 
                           fontWeight="medium" 
                           cursor="pointer" 
                           color="white" 
                           colorScheme="cyan" 
                           leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                        />
                           }
                           
                        </Td>
                     </Tr>
                  </Tbody>
               </Table>
               <Pagination />
            </Box>
         </Flex>
      </Box>
   )
}