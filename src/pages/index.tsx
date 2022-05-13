import { Flex, Button, Stack, FormLabel } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string
  password: string
}

const signInSchema = yup.object().shape({
  email: yup.string().required("Email is required!").email("Email is not valid!"),
  password: yup.string().required("Password is required!")
})

export default function Home() {
  const { register, formState, handleSubmit, formState: {errors} } = useForm<SignInFormData>({
    resolver: yupResolver(signInSchema)
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (value) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(value);
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <FormLabel htmlFor="email" color="cyan.400">E-mail</FormLabel>
          <Input name="email" type="email" {...register('email')}/>
          <p>{errors.email?.message}</p>
          <FormLabel htmlFor="password" color="cyan.400">Password</FormLabel>
          <Input name="password" type="password" {...register('password')}/>
          <p>{errors.password?.message}</p>
        </Stack>
        <Button type="submit" mt="6" colorScheme={"cyan"} size="lg" isLoading={formState.isSubmitting} >Login</Button>
      </Flex> 
    </Flex>
  );
}
