import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../../../Users/model/types/user';
import { ThunkExtraArg } from '@/shared/config/store/store';

export const fetchUserById = createAsyncThunk<
    User,
    string | undefined,
    { rejectValue: string; extra: ThunkExtraArg }
>('userDetailed/fetchUserById', async (userId, thunkApi) => {
    const { rejectWithValue, extra } = thunkApi;

    if (!userId) {
        throw new Error('');
    }

    try {
        const response = await extra.api.get<User>(`/profiles/${userId}`);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
