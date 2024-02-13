import React from "react";
import { Box, Link, VStack, Text, Divider } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box
      w="250px" // Ancho del sidebar
      p="5" // Padding interior
      bg="gray.800" // Color de fondo
      color="white" // Color de texto
      height="100vh" // Altura para ocupar la ventana completa
    >
      <Text mb="5" fontSize="2xl" fontWeight="bold">
        QuizMaster
      </Text>
      <VStack align="stretch" spacing="4">
        <Link href="#" _hover={{ textDecor: "none", color: "blue.200" }}>
          My Profile
        </Link>
        <Link href="#" _hover={{ textDecor: "none", color: "blue.200" }}>
          Tests
        </Link>
        <Link href="#" _hover={{ textDecor: "none", color: "blue.200" }}>
          Create Test
        </Link>
        <Divider borderColor="gray.600" />
        <Link href="#" _hover={{ textDecor: "none", color: "red.300" }}>
          Sign Out
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
