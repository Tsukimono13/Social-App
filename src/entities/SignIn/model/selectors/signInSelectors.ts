import { RootState } from "@/shared/config/store/store";

export const getSignInEmail = (state: RootState) => state.signIn.email;
export const getSignInPassword = (state: RootState) => state.signIn.password;
export const getSignInIsLoading = (state: RootState) => state.userDetailed?.isLoading || false;
export const getSignInError = (state: RootState) => state.userDetailed?.error;