import { useRecoilState, RecoilState } from "recoil";
import { GlobalState } from "./../constants";
import { RecoilStateDictionary } from "../recoil";

const useGlobalState = <T>(
  state: GlobalState
): [T, (newValue: T | ((currValue: T) => T)) => void] => {
  const recoilState: RecoilState<T> = RecoilStateDictionary[
    state
  ] as unknown as RecoilState<T>;
  return useRecoilState<T>(recoilState);
};

export default useGlobalState;
