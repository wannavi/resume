import { Box, Link, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Profile from "../components/Profile";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box p={4} display={{ md: "flex" }}>
        <Profile />
      </Box>
    </Layout>
  );
};

export default Home;
