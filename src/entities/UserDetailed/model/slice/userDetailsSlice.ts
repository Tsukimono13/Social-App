import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserById } from '../services/fetchUserById/fetchUserById';
import { User } from '../../../Users/model/types/user';
import { UserSchema } from '../types/userSchema';

const initialState: UserSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const userDetailsSlice = createSlice({
    name: 'usersDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                fetchUserById.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.isLoading = false;
                    state.data = action.payload;
                },
            )
            .addCase(fetchUserById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: userDetailsActions } = userDetailsSlice;
export const { reducer: userDetailsReducer } = userDetailsSlice;
