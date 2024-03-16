import React, { FC } from "react";
import { Skeleton as ChakraSkeleton } from "@chakra-ui/react"; // Importa el componente Skeleton de Chakra UI
import { SkeletonProps } from "../../types";

const Skeleton: FC<SkeletonProps> = ({
  children,
  w,
  h,
  isLoading = false,
  ...otherStyles
}) => {
  return isLoading ? (
    <ChakraSkeleton height={w} width={h} {...otherStyles} />
  ) : (
    children
  ); // Utiliza los nombres de las props de Chakra UI
};

export default Skeleton;
