import React, { FC } from "react";

import { Text, Heading, Box } from "@chakra-ui/react";

const Typography = ({
  text = "",
  fontSize = "md",
  isLoading = false,
  fontWeight = "normal",
  bold = false,
  center = false,
  header = false,
  uppercase = false,
  mb = 4,
}) => {
  const onFormat = (value: any) => (uppercase ? value.toUpperCase() : value);

  const textAlign = center ? "center" : undefined;
  if (isLoading) {
    return <Box width="full" height="20px" bg="gray.200"></Box>;
  }
  return header ? (
    <Heading
      fontWeight={bold ? "bold" : fontWeight}
      fontSize={fontSize}
      textAlign={textAlign}
      mb={mb}
    >
      {onFormat(text)}
    </Heading>
  ) : (
    <Text
      fontWeight={bold ? "bold" : fontWeight}
      fontSize={fontSize}
      textAlign={textAlign}
    >
      {onFormat(text)}
    </Text>
  );
};

export default React.memo(Typography);
