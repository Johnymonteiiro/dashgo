import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Inputs";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type valuesProps = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const methods = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const error = methods.formState.errors;
  const handleSign: SubmitHandler<valuesProps> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <FormProvider {...methods}>
        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
          onSubmit={methods.handleSubmit(handleSign)}
        >
          <Stack spacing={4}>
            <Input
              name="email"
              label="E-mail"
              type="email"
              error={error.email}
            />
            <Input
              name="password"
              label="Senha"
              type="password"
              error={error.password}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="pink"
            size="lg"
            isLoading={methods.formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </FormProvider>
    </Flex>
  );
}
