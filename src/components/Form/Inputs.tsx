import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputsProps,
} from "@chakra-ui/react";
import { FieldError, useFormContext } from "react-hook-form";

interface InputsProps extends ChakraInputsProps {
  name: string;
  label?: string;
  error?: FieldError;
}

export function Input({ name, label, error, ...rest }: InputsProps) {
  const { register } = useFormContext();

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gary.900",
        }}
        size="lg"
        {...rest}
        {...register(name)}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
}
