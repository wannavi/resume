import { Box, Text, useBreakpointValue } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Box
      flexShrink={0}
      sx={useBreakpointValue({
        md: {
          position: "sticky",
          top: 20,
          textAlign: "center",
          alignSelf: "flex-start",
        },
      })}
      h="10"
    >
      <Text>asdfaksdjfalssdjfk</Text>
    </Box>
  );
}
