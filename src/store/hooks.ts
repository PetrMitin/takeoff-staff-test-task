import { TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import { action } from './actions';
import { AppDispatch, RootState } from "./store";

export const useAppDispatch = () =>  useDispatch<AppDispatch<action>>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector