import { userDetailsReducer } from '@/entities/UserDetailed/model/slice/userDetailsSlice';
import { usersReducer } from '../../../entities/Users/model/slice/usersSlice';
import { configureStore } from '@reduxjs/toolkit';
import { signInReducer } from '@/entities/SignIn/model/slice/signInSlice';
import { profileReducer } from '@/entities/AuthData';
import { $api } from '@/shared/api/api';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';


export const store = configureStore({
    reducer: {
        users: usersReducer,
        userDetailed: userDetailsReducer,
        signIn: signInReducer,
        authData: profileReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                api: $api,
                
            }
        }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate: (to: To, options?: NavigateOptions) => void;
}
