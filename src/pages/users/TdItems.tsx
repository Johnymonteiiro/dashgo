import { Button, Icon, Td, useBreakpointValue } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";

export function TdItems() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      {isWideVersion ? (
        <Td>
          <Button
            as="a"
            size="sm"
            fontSize="sm"
            colorScheme="purple"
            leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
          >
            Editar
          </Button>
        </Td>
      ) : (
        <Td>
          <Button as="a" size="sm" fontSize="sm" colorScheme="purple">
            Editar
          </Button>
        </Td>
      )}
    </>
  );
}
