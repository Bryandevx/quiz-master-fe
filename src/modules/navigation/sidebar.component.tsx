import React, { FC, useEffect, useState } from "react";

import { Box, Link, VStack, Text, Divider } from "@chakra-ui/react";

import { useTranslation, useNavigation } from "@/shared/hooks";

import { GlobalRoute, AppScreen } from "@/shared/constants";

import { StorageService } from "@/shared/services";

const Sidebar: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    StorageService.getUser() // TODO REPLACE WITH AUTH HOOK and GLOBAL USER STATE
      .then((user) => {
        if (user) {
          setUser(user);
        }
      })
      .catch(console.error);
  }, []);

  const handleProfileClick = () => {
    let routeLink = {
      route: GlobalRoute.APP,
      screen: AppScreen.PROFILE,
    };

    navigate.push(routeLink);
  };

  const handleTestsClick = () => {
    let routeLink = {
      route: GlobalRoute.APP,
      screen: AppScreen.TESTS,
    };
    navigate.push(routeLink);
  };

  const handleCreateTestClick = () => {
    let routeLink = {
      route: GlobalRoute.APP,
      screen: AppScreen.CREATE_TEST,
    };
    navigate.push(routeLink);
  };

  const handleSignOutClick = () => {
    console.log("Cerrar sesión"); // TODO
  };

  return (
    <Box w="250px" p="5" bg="gray.800" color="white" height="100vh">
      <Text mb="5" fontSize="2xl" fontWeight="bold">
        QuizMaster
      </Text>
      {user && (
        <Text mb="5" fontSize="xl">
          {`Hola, ${user.firstName}`}{" "}
          {/* Asumiendo que el objeto user tiene una propiedad name */}
        </Text>
      )}
      <VStack align="stretch" spacing="4">
        <Link
          as="button"
          onClick={handleProfileClick}
          _hover={{ textDecor: "none", color: "blue.200" }}
        >
          {t("home.sidemenu.myProfile")}
        </Link>
        <Link
          as="button"
          onClick={handleTestsClick}
          _hover={{ textDecor: "none", color: "blue.200" }}
        >
          {t("home.sidemenu.tests")}
        </Link>
        <Link
          as="button"
          onClick={handleCreateTestClick}
          _hover={{ textDecor: "none", color: "blue.200" }}
        >
          {t("home.sidemenu.createTest")}
        </Link>
        <Divider borderColor="gray.600" />
        <Link
          as="button"
          onClick={handleSignOutClick}
          _hover={{ textDecor: "none", color: "red.300" }}
        >
          {t("home.sidemenu.signOut")}
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
