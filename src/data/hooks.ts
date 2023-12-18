import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../store/actions";
import { RootState } from "../store/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actionCreators, dispatch);
};