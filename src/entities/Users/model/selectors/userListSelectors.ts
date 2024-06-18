import { RootState } from "@/shared/config/store/store";

export const getUsers = (state: RootState) => state.users.data ?? [];
export const getUsersIsLoading = (state: RootState) => state.users.isLoading || false;
export const getUsersError = (state: RootState) => state.users.error;

export const getUsersLimit = (state: RootState) => state.users.limit || 8;
export const getUsersPage = (state: RootState) => state.users.page || 1;
export const getUsersHasMore = (state: RootState) => state.users.hasMore;