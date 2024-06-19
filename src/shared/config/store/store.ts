import { userDetailsReducer } from '@/entities/UserDetailed/model/slice/userDetailsSlice';
import { usersReducer } from '../../../entities/Users/model/slice/usersSlice';
import { configureStore } from '@reduxjs/toolkit';
import { signInReducer } from '@/entities/SignIn/model/slice/signInSlice';
import { profileReducer } from '@/entities/AuthData';
import { $api } from '@/shared/api/api';
import { AxiosInstance } from 'axios';
import { rtkApi } from '@/shared/api/rtkApi';


export const store = configureStore({
    reducer: {
        users: usersReducer,
        userDetailed: userDetailsReducer,
        signIn: signInReducer,
        authData: profileReducer,
        [rtkApi.reducerPath]: rtkApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                api: $api,
            }
        }
    }).concat(rtkApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface ThunkExtraArg {
    api: AxiosInstance;
}
