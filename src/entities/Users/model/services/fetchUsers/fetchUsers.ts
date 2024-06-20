import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import { RootState, ThunkExtraArg  } from '@/shared/config/store/store';
import { getUsersLimit } from '../../selectors/userListSelectors';

interface FetchUsersProps {
    page?: number;
}

export const fetchUsers = createAsyncThunk<
    User[],
    FetchUsersProps,
    { rejectValue: string; extra: ThunkExtraArg; state: RootState }
>('users/fetchUsers', async (props, thunkApi) => {
    const { rejectWithValue, extra, getState} = thunkApi;
    const { page = 1} = props;
    const limit = getUsersLimit(getState());
    try {
        const response = await extra.api.get<User[]>('/profiles', {
            params: {
                _limit: limit,
                _page: page,
            }
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});
