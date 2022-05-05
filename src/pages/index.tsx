import { Flex, Button, Stack, FormLabel } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function Home() {
  return (
    <Flex 
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex 
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing={4}>
          <FormLabel htmlFor="email" color="cyan.400">E-mail</FormLabel>
          <Input name="email" type="email"/>
          <FormLabel htmlFor="password" color="cyan.400">Password</FormLabel>
          <Input name="password" type="password" />
        </Stack>
        <Button type="submit" mt="6" colorScheme={"cyan"} size="lg" >Login</Button>
      </Flex> 
    </Flex>
  );
}
