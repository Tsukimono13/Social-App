import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UsersSchema } from '../types/usersSchema';
import { fetchUsers } from '../services/fetchUsers/fetchUsers';
import { User } from '../types/user';

const initialState: UsersSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
    page: 1,
    limit: 8,
    hasMore: true,
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
    },
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
                    state.hasMore = action.payload.length === state.limit;
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
