import { User } from "./user";

export interface UsersSchema {
    isLoading: boolean;
    error?: string;
    data?: User[];
}

export interface UserSchema {
    isLoading: boolean;
    error?: string;
    data?: User;
}
