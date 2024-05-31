import React, { ReactNode } from "react";
import { Box as ChakraBox, BoxProps as ChakraBoxProps } from "@chakra-ui/react";

interface BoxProps extends ChakraBoxProps {
  children: ReactNode;
  alignCenter?: boolean;
  highlight?: boolean;
}

const Box: React.FC<BoxProps> = ({
  alignCenter,
  highlight,
  children,
  className,
  ...props
}) => {
  const centeredClass: ChakraBoxProps = alignCenter
    ? {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
        bg: "lightblue",
        width: "100%",
        height: "100vh",
      }
    : {
        bg: "green",
      };

  const highlightClass: ChakraBoxProps = highlight
    ? {
        borderColor: "yellow",
        borderWidth: "20px",
      }
    : {};

  return (
    <ChakraBox
      shadow="md"
      rounded="md"
      maxW="500px"
      className={className}
      {...centeredClass}
      {...highlightClass} // Aplica otro paquete de clases
      {...props}
    >
      {children}
    </ChakraBox>
  );
};

export default Box;
