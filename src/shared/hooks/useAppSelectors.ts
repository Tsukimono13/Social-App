import { useSelector } from "react-redux";
import { RootState } from "../config/store/store";

export const useAppSelector = useSelector.withTypes<RootState>()