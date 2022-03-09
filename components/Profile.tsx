import {
  Avatar,
  Box,
  Divider,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon, LinkIcon } from "@chakra-ui/icons";

export default function Profile() {
  return (
    <Box>
      <VStack p={10} borderWidth={1.25} borderRadius={"lg"}>
        <Avatar
          size="xl"
          name="github profile"
          src="https://avatars.githubusercontent.com/u/50140505?s=96&v=4"
        />
        <Text fontSize="2xl">Junghwan Cho</Text>
        <Text color="gray.500">Reeul</Text>
        <Divider />
        <br />
        <HStack>
          <EmailIcon />
          <Text>chotnt741@gmail.com</Text>
        </HStack>
        <HStack>
          <LinkIcon />
          <Link href={"https://github.com/Reeul"}>
            https://github.com/Reeul
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
