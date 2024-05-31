import { Icon as ChakraIcon, Box, useColorModeValue } from "@chakra-ui/react";

import { useState } from "react";

import iconMap from "./icon.util";

const Icon = ({
  name = "InfoIcon",
  size = "24px",
  color = "currentColor",
  onClick = () => console.log("Icon clicked"),
  ...props
}) => {
  const defaultColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const [iconColor, setIconColor] = useState(color || defaultColor);

  const IconComponent = iconMap[name];

  return (
    <Box onClick={onClick} {...props}>
      <ChakraIcon as={IconComponent} w={size} h={size} color={iconColor} />
    </Box>
  );
};

export default Icon;
