export * from "./translation.type";
export * from "./global-states";
export * from "./paths.type";

export type ExtractTypename<T> = Omit<T, "__typename">;
