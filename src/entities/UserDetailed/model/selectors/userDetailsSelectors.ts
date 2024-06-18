import { RootState } from "@/shared/config/store/store";

export const getUserDetailsData = (state: RootState) => state.userDetailed.data;
export const getUserDetailsIsLoading = (state: RootState) => state.userDetailed?.isLoading || false;
export const getUserDetailsError = (state: RootState) => state.userDetailed?.error