import React, { FC, useContext } from "react";

import { Box, Flex, VStack } from "@chakra-ui/react";
import { SearchBar } from "../navigation";
import TestListComponent from "../tests/test-list/test-list.component";

const Home: FC = () => {
  return (
    <Flex h="100vh">
      <VStack w="full" spacing={4}>
        <Box w="full" p="4">
          <SearchBar />
        </Box>
        <Box w="full" p="4" bg="gray.100">
          {<TestListComponent></TestListComponent>}
        </Box>
      </VStack>
    </Flex>
  );
};

export default Home;
