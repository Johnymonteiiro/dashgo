import {
  Box,
  Divider,
  Flex,
  Heading,
  VStack,
  SimpleGrid,
  HStack,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Inputs";
import { Header } from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type valuesProps = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "No minimo 6 caracteres")
    .max(12, "No maxímo 12 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUser() {
  const methods = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const error = methods.formState.errors;

  const handleCreateUser: SubmitHandler<valuesProps> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <FormProvider {...methods}>
          <Box
            as="form"
            flex="1"
            borderRadius={8}
            bg="gray.800"
            p={["6", "8"]}
            onSubmit={methods.handleSubmit(handleCreateUser)}
          >
            <Heading size="lg" fontWeight="normal">
              Criar Usuário
            </Heading>

            <Divider my="6" borderColor="gray.700" />
            <VStack spacing="8">
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input name="name" label="nome Completo" error={error.name} />
                <Input
                  name="email"
                  type="email"
                  label="E-mail"
                  error={error.email}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input
                  name="password"
                  type="password"
                  label="Senha"
                  error={error.password}
                />
                <Input
                  name="password_confirmation"
                  type="password"
                  label="Confirmação da senha"
                  error={error.password_confirmation}
                />
              </SimpleGrid>
            </VStack>

            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users/user" passHref>
                  <Button as="a" colorScheme="whiteAlpha">
                    Cancelar
                  </Button>
                </Link>
                <Button
                  type="submit"
                  colorScheme="pink"
                  isLoading={methods.formState.isSubmitting}
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </FormProvider>
      </Flex>
    </Box>
  );
}
