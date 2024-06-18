import { RootState } from "@/shared/config/store/store";

export const getSignInUsername = (state: RootState) => state.signIn.username;
export const getSignInPassword = (state: RootState) => state.signIn.password;
export const getSignInIsLoading = (state: RootState) => state.userDetailed?.isLoading || false;
export const getSignInError = (state: RootState) => state.userDetailed?.error;