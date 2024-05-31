import * as React from "react";

import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";

import { useTranslation } from "@/shared/hooks";

//import { useNavigate } from 'react-router-dom'; // React Router para la navegación en lugar de @react-navigation/native
import { LinkProps } from "@/shared/types";

const Link: React.FC<LinkProps> = ({
  color = "primary",
  underlined = false,
  text,
  to,
  center,
  onClick,
  ...otherStyles
}) => {
  const { t } = useTranslation();

  const textColor = useColorModeValue(
    color === "primary" ? "blue.600" : "gray.600",
    color === "primary" ? "blue.300" : "gray.300"
  );

  const flexProps = center
    ? { justifyContent: "center" }
    : { flexDirection: "row", alignSelf: "flex-start" };

  return (
    <ChakraLink
      color={textColor}
      isUnderlined={underlined}
      {...props}
      {...flexProps}
      {...otherStyles}
      textDecoration={underlined ? "underline" : "none"}
    >
      {t(text)}
    </ChakraLink>
  );
};

export default React.memo(Link);
