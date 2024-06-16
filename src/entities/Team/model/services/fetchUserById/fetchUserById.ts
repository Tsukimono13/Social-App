import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/user';
import axios from 'axios';

export const fetchUserById = createAsyncThunk<
    User,
    string | undefined,
    { rejectValue:  string  }
    >(
        'userDetailed/fetchUserById',
        async (userId, thunkApi) => {
            const { rejectWithValue } = thunkApi;

            if (!userId) {
                throw new Error('');
            }

            try {
                const response = await axios.get<User>(`http://localhost:3000/users/${userId}`);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
