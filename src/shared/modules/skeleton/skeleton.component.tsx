import React, { FC } from "react";

import { Skeleton as ChakraSkeleton } from "@chakra-ui/react";

import { SkeletonProps } from "@/shared/types";

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
  );
};

export default Skeleton;
