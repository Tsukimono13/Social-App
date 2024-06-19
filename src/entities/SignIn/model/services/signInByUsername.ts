import { createAsyncThunk } from '@reduxjs/toolkit';
import { profileActions } from '@/entities/AuthData';
import { UserData } from '@/entities/AuthData/model/types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { ThunkExtraArg } from '@/shared/config/store/store';

interface SignInByUsernameProps {
    email: string;
    password: string;
}

export const signInByUsername = createAsyncThunk<
    UserData,
    SignInByUsernameProps,
    { rejectValue: string, extra: ThunkExtraArg }
>(
    'sign in/signInByUsername',
    async ({ email, password }: SignInByUsernameProps, thunkApi) => {
        const { rejectWithValue, extra, dispatch } = thunkApi;
        try {
            const response = await extra.api.post<UserData>(
                '/login',
                {
                    email,
                    password,
                },
            );

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(profileActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('Произошла ошибка при отправке данных');
        }
    },
);
