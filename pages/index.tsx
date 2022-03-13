import { Box, useBreakpointValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import MyBackground from "../components/MyBackground";
import Profile from "../components/Profile";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box pt={4} display={{ md: "flex" }}>
        <Box
          flex={1}
          sx={useBreakpointValue({
            md: {
              position: "sticky",
              alignSelf: "flex-start",
              top: 20,
            },
          })}
        >
          <Profile />
        </Box>

        <Box flex={2}>
          <MyBackground />
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
