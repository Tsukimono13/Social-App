import { RootState } from "@/shared/config/store/store";


export const getProfileAuthData = (state: RootState) => state.authData.authData;
