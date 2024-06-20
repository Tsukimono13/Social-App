import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '../const/localStorage';

export const $api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY),
    },
});
