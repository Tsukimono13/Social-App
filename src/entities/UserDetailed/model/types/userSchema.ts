import { User } from "@/entities/Users/model/types/user";

export interface UserSchema {
    isLoading: boolean;
    error?: string;
    data?: User;
}