import { RootState } from "@/shared/config/store/store";


export const getProfileAuthData = (state: RootState) => state.authData.authData;
export const getProfileDataInited = (state: RootState) => state.authData._inited;
