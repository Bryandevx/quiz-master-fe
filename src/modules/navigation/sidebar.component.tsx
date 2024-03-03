import React from "react";
import { Box, Link, VStack, Text, Divider } from "@chakra-ui/react";
import { useTranslation } from "@/shared/hooks";

const Sidebar = () => {
  const { t } = useTranslation();

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
          {t("home.sidemenu.myProfile")}
        </Link>
        <Link href="#" _hover={{ textDecor: "none", color: "blue.200" }}>
          {t("home.sidemenu.tests")}
        </Link>
        <Link href="#" _hover={{ textDecor: "none", color: "blue.200" }}>
          {t("home.sidemenu.createTest")}
        </Link>
        <Divider borderColor="gray.600" />
        <Link href="#" _hover={{ textDecor: "none", color: "red.300" }}>
          {t("home.sidemenu.signOut")}
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
