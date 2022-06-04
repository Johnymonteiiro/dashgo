import { Input, Icon, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {

  const SearchInputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      maxWidth={480}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        ref={SearchInputRef}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
