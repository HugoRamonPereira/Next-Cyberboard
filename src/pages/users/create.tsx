import { Box, Button, Divider, Flex, FormLabel, Heading, HStack, Icon, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { RiSave3Line } from "react-icons/ri"
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateUserFormData = {
   name: string
   email: string
   password: string
   password_confirmation: string
 }
 
 const createUserFormSchema = yup.object().shape({
   name: yup.string().required("Name is required!"),
   email: yup.string().required("Email is required!").email("Email is not valid!"),
   password: yup.string().required("Password is required!"),
   password_confirmation: yup.string().oneOf([null, yup.ref("password")], "Passwords must match!")
 })

export default function CreateUser() {
   const { register, formState, handleSubmit, formState: {errors} } = useForm<CreateUserFormData>({
      resolver: yupResolver(createUserFormSchema)
   })

const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
   await new Promise(resolve => setTimeout(resolve, 2000));
   console.log(values);
}

   return (
      <Box>
         <Header />
         <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
            <Sidebar />

            <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6","8"]} onSubmit={handleSubmit(handleCreateUser)} >
              <Heading size="lg" fontWeight="normal" color="cyan.500">Create user</Heading>
              <Divider my="6" borderColor="cyan.500" />
              <VStack spacing="8" borderColor="cyan.500">
                  <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
                     <Box>
                        <FormLabel htmlFor="name" color="cyan.400">Name</FormLabel>
                        <Input name="name" type="name" {...register("name")} />
                        <p>{errors.name?.message}</p>
                     </Box>
                     <Box>
                        <FormLabel htmlFor="email" color="cyan.400">E-mail</FormLabel>
                        <Input name="email" type="email" {...register("email")}/>
                        <p>{errors.email?.message}</p>
                     </Box>             
                  </SimpleGrid>
                  <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                     <Box>
                        <FormLabel htmlFor="name" color="cyan.400">Password</FormLabel>
                        <Input name="password" type="password" {...register("password")}/>
                        <p>{errors.password?.message}</p>
                     </Box>
                     <Box>
                        <FormLabel htmlFor="name" color="cyan.400">Password Confirmation</FormLabel>
                        <Input name="password_confirmation" type="password" {...register("password_confirmation")}/>
                        <p>{errors.password_confirmation?.message}</p>
                     </Box>
                  </SimpleGrid>
              </VStack>
              <Flex mt="8" justify="flex-end">
                 <HStack spacing="6">
                     <Link as="a" href="/users" passHref>
                        <Button colorScheme="whiteAlpha">Cancel</Button>
                     </Link>
                     <Button type="submit" isLoading={formState.isSubmitting} colorScheme="cyan" color="white" rightIcon={ <Icon as={RiSave3Line} fontSize="20" /> }> Save </Button> 
                 </HStack>
              </Flex>
            </Box>
         </Flex>
      </Box>
   )
}