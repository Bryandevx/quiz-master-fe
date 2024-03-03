export * from "./paths.type";
export * from "./global-states";
export * from "./translation.type";
//export * from './form.type';
//export * from "./radio.type";
// export * from './button.type';
// export * from './checkbox.type';

export type ExtractTypename<T> = Omit<T, "__typename">;
