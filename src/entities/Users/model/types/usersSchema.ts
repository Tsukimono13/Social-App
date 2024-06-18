import { User } from './user';

export interface UsersSchema {
    isLoading: boolean;
    error?: string;
    data?: User[];

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
}
