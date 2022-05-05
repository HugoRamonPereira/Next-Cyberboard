import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination() {
   return (
      <Stack
         direction="row"
         mt="8"
         justify="space-between"
         align="center"
         spacing="6"
      >
         <Box>
            <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
          </Box>
         <Stack direction="row" spacing="3">
            <Button 
               size="sm" 
               fontSize="xs" 
               colorScheme="cyan" 
               disabled 
               _disabled={{ 
                  bg: 'cyan.500', 
                  cursor: 'not-allowed' 
               }}
            >
               1
            </Button>
            <Button 
               size="sm" 
               fontSize="xs" 
               width="4"
               bg="cyan.700"
               _hover={{
                  bg: 'cyan.500'
               }}
            >  
               2
            </Button>
            <Button 
               size="sm" 
               fontSize="xs" 
               width="4"
               bg="cyan.700"
               _hover={{
                  bg: 'cyan.500'
               }}
            >  
               3
            </Button>
            <Button 
               size="sm" 
               fontSize="xs" 
               width="4"
               bg="cyan.700"
               _hover={{
                  bg: 'cyan.500'
               }}
            >  
               4               
            </Button>
         </Stack>
      </Stack>
   )
}