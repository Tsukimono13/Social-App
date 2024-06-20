import { useDispatch } from 'react-redux';
import { AppDispatch } from '../config/store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();