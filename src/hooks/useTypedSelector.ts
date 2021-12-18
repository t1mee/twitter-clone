import { TypedUseSelectorHook, useSelector } from "react-redux";
import {RootState} from '../app/reducers'


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector