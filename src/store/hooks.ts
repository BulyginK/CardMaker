import rootReducer from "./reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as EditorActionsCreator from "./actionCreators";

type RootState = ReturnType<typeof rootReducer>;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...EditorActionsCreator,
    },
    dispatch,
  );
};

export { useAppSelector, useAppActions };
