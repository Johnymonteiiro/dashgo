import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputsProps,
} from "@chakra-ui/react";

interface InputsProps extends ChakraInputsProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputsProps) {
    
  return (
    <FormControl>
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
      />
    </FormControl>
  );
}
