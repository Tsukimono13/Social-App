import { createSlice } from '@reduxjs/toolkit';
import { SignInSchema } from '../types/signInSchema';
import { signInByUsername } from '../services/signInByUsername';

const initialState: SignInSchema = {
    isLoading: false,
    error: undefined,
    password: '',
    email: '',
};

export const signInSlice = createSlice({
    name: 'sign in',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signInByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(signInByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(signInByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: signInActions } = signInSlice;
export const { reducer: signInReducer } = signInSlice;
