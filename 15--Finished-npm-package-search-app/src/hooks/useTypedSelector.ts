import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state/mainStorage";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
