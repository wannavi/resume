import { Box, Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container maxW="container.md">
      <Navbar />
      <Box p={4}>{children}</Box>
    </Container>
  );
}
