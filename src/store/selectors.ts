import { RootState } from "./store";
import { Editor } from "../model/type";

export const selectEditor = (state: RootState) => state.canvasReducer as Editor;
