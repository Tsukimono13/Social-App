export type { UserData, UserDataSchema } from './model/types/user';
export {
    getProfileAuthData,
    getProfileDataInited,
} from './model/selectors/getUserAuthData/getProfileAuthData';
export { profileActions, profileReducer } from './model/slice/profileSlice';
