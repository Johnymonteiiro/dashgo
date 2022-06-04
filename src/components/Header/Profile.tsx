import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="center">
          <Text>Johny Monteiro</Text>
          <Text color="gray.300" fontSize="small">
            johny@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Johny Monteiro"
        src="https://github.com/johnymonteiiro.png"
      />
    </Flex>
  );
}
