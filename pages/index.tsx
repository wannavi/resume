import { Box, Link, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import Profile from "../components/Profile";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box p={4} display={{ md: "flex" }}>
        <Profile />
        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} h="100vh">
          <Text
            fontWeight="bold"
            textTransform="uppercase"
            fontSize="sm"
            letterSpacing="wide"
            color="teal.600"
          >
            Marketing
          </Text>
          <Link
            mt={1}
            display="block"
            fontSize="lg"
            lineHeight="normal"
            fontWeight="semibold"
            href="#"
          >
            Finding customers for your new business
          </Link>
          <Text mt={2} color="gray.500">
            Getting a new business off the ground is a lot of hard work. Here
            are five ideas you can use to find your first customers.
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
