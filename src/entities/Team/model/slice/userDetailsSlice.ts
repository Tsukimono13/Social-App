import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserSchema } from '../types/userSchema';
import { fetchUserById } from '../services/fetchUserById/fetchUserById';
import { User } from '../types/user';

const initialState: UserSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const userDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchUserById.fulfilled, (
                state,
                action: PayloadAction<User>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: userDetailsActions } = userDetailsSlice;
export const { reducer: userDetailsReducer } = userDetailsSlice;
