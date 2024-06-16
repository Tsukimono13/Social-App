import { userDetailsReducer } from '@/entities/Team/model/slice/userDetailsSlice';
import { usersReducer } from '../../../entities/Team/model/slice/usersSlice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    userDetailed: userDetailsReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch