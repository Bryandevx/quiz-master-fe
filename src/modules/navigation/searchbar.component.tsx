import React, { FC } from "react";
import { Input, Button, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"; //CREATE COMPONENT ICON

const SearchBar = () => {
  return (
    <form>
      <InputGroup size="md">
        <Input pr="4.5rem" type="text" placeholder="Buscar..." />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm">
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default SearchBar;
