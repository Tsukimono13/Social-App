import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UsersSchema } from '../types/userSchema';
import { fetchUsers } from '../services/fetchUsers/fetchUsers';
import { User } from '../types/user';


const initialState: UsersSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchUsers.fulfilled,
                (state, action: PayloadAction<User[]>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: usersActions } = usersSlice;
export const { reducer: usersReducer } = usersSlice;
