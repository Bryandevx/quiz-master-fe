import { LargeSize } from "./size.type";

import { SpacingProps } from "./style.type";

export interface SkeletonShape {
  h: LargeSize;
  w: LargeSize;
}

export interface SkeletonWrapper {
  skeleton?: {
    h?: LargeSize;
    w?: LargeSize;
  };
}

export interface SkeletonProps extends SpacingProps, SkeletonShape {
  isLoading?: boolean;
  children: React.ReactElement;
}
