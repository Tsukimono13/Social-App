import { RootState } from "@/shared/config/store/store";

export const getUsers = (state: RootState) => state.users.data ?? [];
export const getUsersIsLoading = (state: RootState) => state.users.isLoading || false;
export const getUsersError = (state: RootState) => state.users.error;