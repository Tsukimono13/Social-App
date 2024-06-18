export interface SignInSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}

export interface Profile {
    id: 1;
    username: 'admin';
    password: '123';
}
